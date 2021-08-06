const router = require('express').Router();
const {Category, Product} = require('../../models');

//The '/api/categories' endpoint
Product,  then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });

  router.get('/id',(req, res)=>{
 //find one category by it's 'id' value
 //Include associated Products
    Category.findOne({
        where:{
            id:req.params.id
        },
        include: [
          {
            model: Product,
            attributes: ['id', 'product_name', 'price', 'stock']
      }
    ]
  })
  .then(dbCategoryData =>res.json(dbCategoryData))
  .catch(err =>{
      console.log(err);
      res.status(500).json(err);

   });
});
