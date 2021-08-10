require('dotenv').config();
require('mysql2');
const Sequelize = require('sequelize');

// const sequelize = process.env.DB_URL
// new Sequelize(process.env.DB_URL);
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW,{
    host: 'localhost',
    dialect:'mysql',
    dialectOptions:{
        decimalNumbers: true,
    },
});

// console.log(sequelize)
// async function testAuthentication() {
//     try {
//         await sequelize.authenticate();
//         console.log('db connection established')
//     } catch (error) {
//         console.log('unable to connect to database: ', error);
//     }
// }

// testAuthentication();
// sequelize: sequelize;
module.exports = sequelize;