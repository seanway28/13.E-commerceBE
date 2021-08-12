const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
// const tagRoutes = require('./product-routes');

router.use('/categories', categoryRoutes)
router.use('/products', productRoutes)
// router.use('/tags', tagRoutes)

module.exports = router;
