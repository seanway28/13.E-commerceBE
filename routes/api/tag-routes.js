const router = require("express").Router();
const { Tag, ProductTag, Category } = require("../..models");

// '/api/tag endpoint

router.get("/tags", (req, res) => {
  // locate all tags
  // be sure to include it's associated ProductData

  Tag.findAll({
    include: [
      {
        model: Product,
        attributes: ["id", "product_name", "price", "stock", "category_id"],
        include: [
          {
            model: Category,
            attributes: ["category_name"],
          },
        ],
      },
    ],
  })
    .then((dbTagData) => res.json(dbTagData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/tags/:id", (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Product,
        attributes: ["id", "product_name", "price", "stock", "category_id"],
        include: [
          {
            model: Category,
            attributes: ["category_name"],
          },
        ],
      },
    ],
  })
    .then((dbTagData) => {
      if (!dbTagData) {
        res.status(400).json({ message: "No tag with that id found" });
        return;
      }
      res.json(dbTagData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/tags", (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name,
  })
    .then((dbTagData) => res.json(dbTagData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/tags/:id", (req, res) => {
  // Update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((dbTagData) => {
      if (!dbTagData) {
        res.status(400).json({ message: "No tag with that id found" });
        return;
      }
      res.json(dbTagData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/tags", (req, res) => {
  // Create new tag

  Tag.create({
    tag_name: req.body,
  })
    .then((dbTagData) => res.json(dbTagData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/tags//:id", (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((dbTagData) => {
      if (!dbTagData) {
        res.status(400).json({ message: "No tag with that id found" });
        return;
      }
      res.json(dbTagData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/tags/:id", (req, res));
// delete on tag by its `id` value
Tag.destroy({
  where: {
    id: req.params.id,
  },
})
  .then((dbTagData) => {
    if (!dbTagData) {
      res.status(400).json({ message: "No tag with that id found" });
      return;
    }
    res.json(dbTagData);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });

module.exports = router;
