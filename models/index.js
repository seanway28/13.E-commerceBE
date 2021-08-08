// import models
const Product = require('./product');
const Category = require('./category');
const Tag = require('./tag');
const ProductTag = require('./productTag');

//Products belongs to Category
Product.belongsTo(Category,{
    foreignKey:'category_id'
});

//Categories have many Products
Category.hasMany(Product, {
    foreignKey: 'category_id',

});

//Produxts belongToMany Tags (through ProductTag)
Product,belongsToMany(Tag, {
    through: ProductTag,
    foreignKey:'product_id'
});

//Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
    through: ProductTag, 
    foreignKey: 'Tag_id',

});

module.exports = {Product, Category,Tag,ProductTag,
};