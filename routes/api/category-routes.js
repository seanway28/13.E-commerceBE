const router = require('express').Router();
// const { sequelize } = require('../../config/connection');
const {Category, Product} = require('../../models');

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

module.exports = router;
