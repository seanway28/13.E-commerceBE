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