const express = require('express');
const sequelize = require("./config/connection")
const routes = require('./routes')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extend:true}))

app.use(routes)

sequelize.sync({force: false}).then(()=>{
    // testAuthentication();

    app.listen(PORT,()=>console.log('App listening on port ${PORT}!'));
});
