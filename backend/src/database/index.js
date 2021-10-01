const sequelice = require('sequelize');
const User = require('../apps/models/Users');

const models = [User];
const databaseConfig = require('../config/db');
const {Sequelize} = require("sequelize");

class Database{
    constructor() {
        this.init()
    }
    init(){
        this.connecttion = new Sequelize(databaseConfig)
        models
            .map((model) => model.init(this.connecttion))
            .map(model => model.associate && model.associate(this.connecttion.models))
    }
}

module.exports = new Database();