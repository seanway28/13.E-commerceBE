const express = require('express');
const indexRouter = require('./routes/api/index');
const tagsRouter = require('./routes/api/category-routes');
const categoriesRouter = require('./routes/api/category-routes')
//import sequelize connection
const { testAuthentication, sequelize }= require ('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(expressurlencode({extend:true}))

app.use('/', indexRouter);
app.use('/tags', tagsRouter);
app.use('/categories', categoriesRouter);

//sync sequelize models to the database, then turn on the server
//sequelize sync(({force: true}))
//app.listen(PORT,()=>console.log('App listening on port {$PORT}!'));
//}));

sequelize.sync({force: false}).then(()=>{
    testAuthentication();

    app.listen(PORT,()=>console.log('App listening on port ${PORT}!'));
});
