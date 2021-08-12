const router = require('express').Router();
const {Product, Category, Tag, ProductTag} = require('../../models');

//The '/api/products' endpoint
//get all products  

router.get('/', (req, res) => {
  Product.findAll({
    include: [
      Category,
      {
        model: Tag,
        through: ProductTag
      }
    ]
  }).then(allProducts => res.json(allProducts))
})
// router.get('/'),(req, res) =>{
//     //find all products
//     //be sure to include its associated Category and Tag data

//     Product.findAll({
//         include: [
//             {
//                 model: Category
//               },
//               {
//                 model: Tag
//               }
//             ]
//           })

// then(dbProductData => res.json(dbProductData))
// .catch(err => {
//   console.log(err);
//   res.status(500).json(err);
// });
// }
// // get one product
// router.get('/:id', (req, res) => {
//   // find a single product by its `id`
//   // be sure to include its associated Category and Tag data
//   Product.findOne({
//     where: {
//         id: req.params.id
//     },
//     include: [
//       {
//         model: Category
//       },
//       {
//         model: Tag
//       }
//     ]
//   })
//   .then(dbProductData => {
//     if (!dbProductData) {
//       res.status(400).json({ message: 'No product with that id found'});
//       return;
//     }
//     res.json(dbProductData);
//   })
//   .catch(err => {
//     console.log(err);
//     res.status(500).json(err);
//   });
// });

// //create new product
// router.post('/',(req, res) =>{
//     /*req.body should appear as shown here
//     {
//         product_name"Baseball"
//         price: 50.00
//         stock: 10,
//         taglds: [1,2,3,4]
//     }
//     */
//    Product.create({
//        product_name:req.body.product_name,
//        price: req.body.name,
//        stock: req.body.stock, 
//        taglds: req.body.taglds
//    })
//    .then(product);
//         //If there are product tags, we need to create pairings to bulk create in the productTag model
//         if (req.body.taglds.length){
//             const productTagldArr = req.body.taglds.map((tag_id) =>{
//                 return {
//             product_id: product.id,
//             tag_id,
//                 };
//             });
//             return ProductTag.bulkCreate(productTagldArr);
//         } 
//         // If there are no product tags, respond
//         res.status(200).json(product)

//     .then((productTagIds) => res.status(200).json(productTagIds))

//     .catch((err) => {
//       console.log(err);
//       res.status(400).json(err);
//     });
//     ;

//     // update product
// router.put('/:id', (req, res) => {
//     // update product data
//   Product.update(req.body, {
//     where: {
//       id: req.params.id,
//     },
// })
// .then((product) => {
//     // find all associated tags from ProductTag
//     return ProductTag.findAll({ where: { product_id: req.params.id } });
//   })
//   .then((productTags) => {

// //get a list of current tag_ids
// const productTaglds = productTags = productTags.map(({ tag_id})=>tag_id);
// //create filtered list of new tag_id
// const newProductTags = req.body.taglds
// .filter((tag_id)=>!productTaglds.includes(tag_id))
// .map((tag_id)=>{
//     return {
//         product_id: req.params.id,
//         tag_id,
//       };
//     });
// // Find out which ones to remove
// const productTagsToRemove = productTags
// .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
// .map(({ id }) => id);

// // Run both Actions
// return Promise_all([
//     ProductTag.destroy({where: {id: productTagsToRemove}}),
//     ProductTag.bulkCreate(newProductTags),
// ]);
// })

// .then((updatedProductTags) => res.json(updatedProductTags))
// .catch((err) => {
//   // console.log(err);
//   res.status(400).json(err);
// });
// });

// router.delete('/:id', (req, res) =>{
//     // Delete one product by it's 'id' value
//     Product.destroy({
//         where:{
//             id: req.paramas.id
//         }
// })
// .then(dbProductData => {
//     if (!dbProductData) {
//       res.status(400).json({ message: 'No product with that id found'});
//       return;
//     }
//     res.json(dbProductData);
//   })
//   .catch(err => {
//     console.log(err);
//     res.status(500).json(err);
//     res.status(500).json(err);
//   });
// });

module.exports = router;
