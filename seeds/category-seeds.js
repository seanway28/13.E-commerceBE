const {Category} = require('../models');

const categoryData = [
  {
    category_name: 'Shirts',
  },
  
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Gloves',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
