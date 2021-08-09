const router = require('express').Router();
const CategoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./product-routes');

router.get('/', function(req, res, next) {
    res.render('index', { title: "Express"})
});


module.exports = router;
