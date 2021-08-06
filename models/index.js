// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

//Products belongs to Category
Product.belongsTo(Category,{
    foreignKey:'category_id'
});

//Categories have many Products
Category.hasMany(Product, {
    foreignKey:ProductTag,

});

//Produxts belongToMany Tags (through ProductTag)
Product,belongToMany(Tag, {
    through: ProductTag,
    foreignKey:'product_id'
});

//Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
    through: ProductTag, 
    foreignKey: 'Tag_id',

});

module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
};