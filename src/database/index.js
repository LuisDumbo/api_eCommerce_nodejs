import { Sequelize } from "sequelize";
import databaseConfig from '../config/database'

import User from '../App/models/User'
import Carts from "../App/models/Carts";
import Items from "../App/models/Items";
import ItemsCarts from "../App/models/ItemsCarts";

const models = [User,Carts, Items,ItemsCarts]


class Database {
    constructor() {

        this.init();

    }

    init() {

        //conecção banco de dados com os models 
        this.connection = new Sequelize(databaseConfig);

        models
            .map(model => model.init(this.connection))
           .map(model => model.associate && model.associate(this.connection.models));

    }
}

export default new Database;