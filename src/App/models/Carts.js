import Sequelize, { Model } from "sequelize";
import bcrypt from 'bcrypt'

class Carts extends Model {

    static init(sequelize) {
        super.init({
            amount: Sequelize.INTEGER,
        }, {
            sequelize
        }
        );

        return this;

    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
        this.hasOne(models.ItemsCarts, { foreignKey: 'carts_id' })
    }

}

export default Carts; 