const router = require('express').Router();
const {Product, Category, Tag, ProductTag} = require('../../models');

//The '/api/products' endpoint
//get all products  

router.get('/'),(req, res) =>{
    //find all products
    //be sure to include its associated Category and Tag data

    Product.findAll({
        include: [
            {
                model: Category
              },
              {
                model: Tag
              }
            ]
          })
}
then(dbProductData => res.json(dbProductData))
.catch(err => {
  console.log(err);
  res.status(500).json(err);
});

// get one product
router.get('/:id', (req, res) => {
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
  Product.findOne({
    where: {
        id: req.params.id
    },
    include: [
      {
        model: Category
      },
      {
        model: Tag
      }
    ]
  })
  .then(dbProductData => {
    if (!dbProductData) {
      res.status(400).json({ message: 'No product with that id found'});
      return;
    }
    res.json(dbProductData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

//create new product
router.post('/',(req, res) =>{
    /*req.body should appear as shown here
    {
        product_name"Baseball"
        price: 50.00
        stock: 10,
        taglds: [1,2,3,4]
    }
    */
   Product.create({
       product_name:req.body.product_name,
       price: req.body.name,
       stock: req.body.stock, 
       taglds: req.body.taglds
   })

    }
)
;
