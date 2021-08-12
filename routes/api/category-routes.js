const router = require('express').Router();
// const { sequelize } = require('../../config/connection');
const {Category, Product} = require('../../models');

// // const { testAuthentication, Sequelize } = require("../config/connection");

//The '/api/categories' endpoint
router.get('/', (req, res) => {
  Category.findAll({
    include: [Product]
  }).then(allCats => res.json(allCats))
})

router.get('/:identification', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.identification
    },
    include: [Product]
  }).then(oneCat => res.json(oneCat))
})

router.post('/', (req, res) => {
  Category.create(req.body)
    .then(newCat => res.json(newCat))
})

router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(upCat => res.json(upCat))
})

router.delete('/:catId', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.catId
    }
  }).then(delCat => res.json(delCat))
})
//   router.get('/id',(req, res)=>{
//  //find one category by it's 'id' value
//  //Include associated Products
//     Category.findOne({
//         where:{
//             id:req.params.id
//         },
//         include: [
//           {
//             model: Product,
//             attributes: ['id', 'product_name', 'price', 'stock']
//       }
//     ]
//   })
//   .then(dbCategoryData =>res.json(dbCategoryData))
//   .catch(err =>{
//       console.log(err);
//       res.status(500).json(err);

//    });
// });

// router.put('/:id', (req, res) => {
// //update a category by its 'id' values
// Category.update(req.body, {
//     where: {
//       id: req.params.id
//     }
//   })
//   .then(dbCategoryData => {
//     if (!dbCategoryData) {
//       res.status(400).json({ message: 'No category with that id found'});
//       return;
//     }
//     res.json(dbCategoryData);
//   })
//   .catch(err => {
//     console.log(err);
//     res.status(500).json(err);
// });
// });

// router.delete('/:id', (req, res) => {
//   // delete a category by its `id` value
//   Category.destroy({
//     where: {
//         id: req.params.id
//     }
//   })
// .then(dbCategoryData => {
// if (!dbCategoryData){
//     res.status(400),json({ message:'No categorywith this id found'});
//     return;

// }

// res.json(dbCategoryData);
// })

// .then(dbCategoryData => {
//     if (!dbCategoryData) {
//       res.status(400).json({ message: 'No category with that id found'});
//       return;
//     }
//     res.json(dbCategoryData);
//   })
//   .catch(err => {
//     console.log(err);
//     res.status(500).json(err);
//   });
// });

// sequelize: sequelize;

module.exports = router;
