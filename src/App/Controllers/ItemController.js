import * as Yup from 'yup'

import Items from "../models/Items";
import Carts from "../models/Carts";
import ItemsCarts from "../models/ItemsCarts";

class ItemController {

    async index(req, res) {

        const items = await Items.findAll()

        return res.json({ items });

    }

    async add_carts(req, res) {

        const schema = Yup.object().shape({
            items_id: Yup.number().required(),
            carts_id: Yup.number().required(),
            amount: Yup.number().required()
        })

        if (!(await schema.isValid(req.body))) {

            return res.status(400).json({ erro: 'Falha na Validação' })

        }


        const { items_id, carts_id, amount } = req.body

        const valid_user = await Carts.findOne({
            where: {
                id: carts_id,
                user_id: req.userId,

            }
        })

        if (!valid_user) {
            return res.status(400).json({ error: "Não é o Proprietario do Carrinho" });
        }

        const cart_exist = await Carts.findByPk(carts_id)
        const items_exist = await Items.findByPk(items_id)

        if (!cart_exist || !items_exist) {
            return res.status(400).json({ error: "Carrinho ou Items inesitente" });
        }

        const { id } = await ItemsCarts.findOne({
            where: { items_id, carts_id, }
        }) || false


        if (id) {
            const itemsCarts_update = await ItemsCarts.update({ amount }, { where: { id } })

            const count = await ItemsCarts.count({
                where: { carts_id }
            })

            await Carts.update(
                { amount: count },
                { where: { id: carts_id } }
            )

            return res.json({ itemsCarts_update })

        }


        const itemsCarts = await ItemsCarts.create({
            items_id, carts_id, amount
        })

        const count = await ItemsCarts.count({
            where: { carts_id }
        })

        await Carts.update(
            { amount: count },
            { where: { id: carts_id } }
        )

        return res.json({ itemsCarts })


    }

    async removeFromCart(req, res) {

        const schema_body = Yup.object().shape({
            carts_id: Yup.number().required(),
        })

        const schema_params = Yup.object().shape({
            itemCart_id: Yup.number().required(),
        })

        if (!(await schema_body.isValid(req.body)) || !(await schema_params.isValid(req.params))) {

            return res.status(400).json({ erro: 'Falha na Validação' })

        }

        const { itemCart_id } = req.params
        const { carts_id } = req.body

        const valid_user = await Carts.findOne({
            where: {
                id: carts_id,
                user_id: req.userId,

            }
        })

        if (!valid_user) {
            return res.status(400).json({ error: "Não é o Proprietario do Carrinho" });
        }

        const itemCart = await ItemsCarts.findByPk(itemCart_id)

        if (!itemCart) {
            return res.status(400).json({ error: "Item Não existe" });
        }
        itemCart.destroy()



        const count = await ItemsCarts.count({
            where: { carts_id }
        })

        await Carts.update(
            { amount: count },
            { where: { id: carts_id } }
        )


        return res.send();

    }

}

export default new ItemController()