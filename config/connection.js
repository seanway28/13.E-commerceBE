require('dotenv').config();
const Sequelize=reuire('sequelize');

const sequelize=process.env.env.JAWSBD_URL
?? new Sequelize(process.env.JAWSDB_URL)
new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW,{
    host: 'localhost',
    dialect:'mysql',
    dialectOptions:{
        decimmalNumbers: true,
    },
});

module.exports=sequelize;