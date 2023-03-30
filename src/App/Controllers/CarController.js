import * as Yup from 'yup'
import Items from "../models/Items";
import Carts from "../models/Carts";
import ItemsCarts from "../models/ItemsCarts";


class CarController {

    async index(req, res) {

        const schema = Yup.object().shape({
            carts_id: Yup.number().required()
        })

        if (!(await schema.isValid(req.params))) {

            return res.status(400).json({ erro: 'Falha na Validação' })

        }

        const { carts_id } = req.params

        const valid_user = await Carts.findOne({
            where: {
                id: carts_id,
                user_id: req.userId,

            }
        })

        if (!valid_user) {
            return res.status(400).json({ error: "Não é o Proprietario do Carrinho" });
        }


        const items_list = await Carts.findAll({
            where: { id: carts_id },
            include: {
                model: ItemsCarts,
                include: {
                    model: Items
                }
            }
        })

        const lis_cart_obj = []

        const teste = JSON.parse(JSON.stringify(items_list))


        Object.keys(teste).forEach(function (key, index) {

            lis_cart_obj[index] = {
                id_itemcart: teste[index].ItemsCart.id,
                id_item: teste[index].ItemsCart.Item.id,
                id_cart: teste[index].id,
                name: teste[index].ItemsCart.Item.name,
                amount: teste[index].ItemsCart.amount,
                value_items: teste[index].ItemsCart.Item.value_items,
                total: teste[index].ItemsCart.Item.value_items * teste[index].ItemsCart.amount,
                url: teste[index].ItemsCart.Item.url
            }

        });




        return res.json({ lis_cart_obj })
    }

    async count_items_in_the_car(req, res) {

        const schema_params = Yup.object().shape({
            carts_id: Yup.number().required(),
        })

        if (!(await schema_params.isValid(req.params))) {

            return res.status(400).json({ erro: 'Falha na Validação' })

        }

        const { carts_id } = req.params

        const valid_user = await Carts.findOne({
            where: {
                id: carts_id,
                user_id: req.userId,

            }
        })

        if (!valid_user) {
            return res.status(400).json({ error: "Não é o Proprietario do Carrinho" });
        }

        const {amount} =  await Carts.findByPk(carts_id)


        res.json({ amount})

    }

    async pay(req, res) {

        const schema_body = Yup.object().shape({
            carts_pay: Yup.array().required(),
        })

        const schema_params = Yup.object().shape({
            carts_id: Yup.number().required(),
        })

        if (!(await schema_body.isValid(req.body)) || !(await schema_params.isValid(req.params))) {

            return res.status(400).json({ erro: 'Falha na Validação' })

        }

        const { carts_id } = req.params

        const valid_user = await Carts.findOne({
            where: {
                id: carts_id,
                user_id: req.userId,

            }
        })

        if (!valid_user) {
            return res.status(400).json({ error: "Não é o Proprietario do Carrinho" });
        }

        const { carts_pay } = req.body

        carts_pay.map(async (num) => {


            await ItemsCarts.destroy({
                where: {
                    id: num
                }
            })

        })

        const count = await ItemsCarts.count({
            where: { carts_id }
        })

        await Carts.update(
            { amount: count },
            { where: { id: carts_id } }
        )


        return res.json({ carts_pay })

    }


}

export default new CarController()