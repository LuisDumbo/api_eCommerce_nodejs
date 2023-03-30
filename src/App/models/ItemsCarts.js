import Sequelize, { Model } from "sequelize";


class ItemsCarts extends Model {

    static init(sequelize) {
        super.init({

            amount: Sequelize.INTEGER,
            carts_id: Sequelize.INTEGER,
            items_id: Sequelize.INTEGER,

        }, {
            sequelize
        });

        return this;
    }

    static associate(models) {
        this.belongsTo(models.Items, { foreignKey: 'items_id' })

        // this.belongsTo(models.Carts, { foreignKey: 'carts_id', as: 'Carts' })
        //  this.hasOne(models.Carts)
    }


}

export default ItemsCarts