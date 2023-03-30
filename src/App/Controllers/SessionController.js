import Jwt from "jsonwebtoken"
import * as Yup from 'yup'

import User from "../models/User"
import auth from "../../config/auth"



class SessionController {

    async stor(req, res) {

        const schema = Yup.object().shape({
            email: Yup.string().email().required(),
            password: Yup.string().required()
        })

        if (!(await schema.isValid(req.body))) {

            return res.status(400).json({ erro: 'Falha na Validação' })

        }

        const { email, password } = req.body

        const user = await User.findOne({ where: { email } })

        if (!user) {
            return res.status(401).json({ erro: 'Usuario não existe' })
        }

        if (!(await user.checkPassword(password))) {

            return res.status(401).json({ erro: 'Senha Incorreta' })

        }

        const { id, name } = user

        return res.json({
            user: {
                id,
                name,
                email
            },
            token: Jwt.sign({ id }, auth.secret, {
                expiresIn: auth.expiresIn,
            })
        })


    }


}

export default new SessionController()