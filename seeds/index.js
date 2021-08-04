const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seeTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');

const sequilize = require('../config/connection');

const seedAll = async () => {
    await sequilize.sync({ force: true});

    console.log('\n---database synced---\n');
    
    await seedCategories();

    console.log('\n---categories seeded---\n');
    
    await seedProducts ();

    console.log('\n---products seeded---\n');

    await seedTags();
    console.log('\n----- TAGS SEEDED -----\n');
  
    await seedProductTags();
    
    console.log('\n----- PRODUCT TAGS SEEDED -----\n');
  
    process.exit(0);
  };
  
  seedAll();
  
