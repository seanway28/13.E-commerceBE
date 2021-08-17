const router = require("express").Router();
const { Tag, Product, Category } = require("../../models");

// '/api/tag endpoint

router.get("/", (req, res) => {
  // locate all tags
  // be sure to include it's associated ProductData

  Tag.findAll({
    include: [Product]
  })
    .then((dbTagData) => res.json(dbTagData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [Product]
  }).then(oneCat => res.json(oneCat))
})

router.post('/', (req, res) => {
  Tag.create(req.body)
    .then(newCat => res.json(newCat))
})

router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(upCat => res.json(upCat))
})

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then(delCat => res.json(delCat))
})

module.exports = router;