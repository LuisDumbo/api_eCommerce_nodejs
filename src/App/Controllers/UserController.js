import * as Yup from 'yup'
import Jwt from "jsonwebtoken";
import User from "../models/User";
import Carts from '../models/Carts';
import auth from '../../config/auth';


class UserController {

    async store(req, res) {

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            password: Yup.string().required().min(6)
        })

        if (!(await schema.isValid(req.body))) {

            return res.status(400).json({ erro: 'Falha na Validação' })

        }

        const user_exist = await User.findOne({
            where: { email: req.body.email }
        })

        if (user_exist) {
            return res.status(400).json({ erro: 'Usuario já Existe' })
        }


        const { id, name, email } = await User.create(req.body)


        const { id: id_cart } = await Carts.create({
            user_id: id

        });

        return res.json({
            id, name, email, id_cart,
            token: Jwt.sign({ id }, auth.secret, {
                expiresIn: auth.expiresIn,
            })

        })

    }

}

export default new UserController(); 