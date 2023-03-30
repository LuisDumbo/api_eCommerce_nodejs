import Sequelize, { Model } from "sequelize";
import bcrypt from 'bcrypt'

class Items extends Model {

    static init(sequelize) {
        super.init({

            name: Sequelize.STRING,
            url: Sequelize.STRING,
            value_items: Sequelize.INTEGER,

        }, {
            sequelize
        });

        return this;
    }

    


}

export default Items 