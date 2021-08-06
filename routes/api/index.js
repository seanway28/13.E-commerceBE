const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./product-routes');

router.use('/categories', category-Routes);

router.search('/products',product-Routes);

router.use('/tags',tagRoutes);


module.exports = router;
