const router = require('express').Router();
const {Tag, ProductTag, Category} = require('../..models');

// '/api/tag endpoint

router.get('/', (req, res) => {

// locate all tags
// be sure to include it's associated ProductData

Tag.findAll({
    include:[
              {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
        include: [
          {
            model: Category,
            attributes: ['category_name']
          }
        ]
      }
    ]
  })
  .then(dbTagData => res.json(dbTagData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
        include: [
          {
            model: Category,
            attributes: ['category_name']
          }
        ]
      }
    ]
  })
  .then(dbTagData => {
    if (!dbTagData) {
      res.status(400).json({ message: 'No tag with that id found'});
      return;
    }
    res.json(dbTagData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name
  })
  .then(dbTagData => res.json(dbTagData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {
  // Update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(dbTagData => {
    if (!dbTagData) {
      res.status(400).json({ message: 'No tag with that id found'});
      return;
    }
    res.json(dbTagData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  // Create new tag

Tag.create({
  tag_name: req.body
})
)
