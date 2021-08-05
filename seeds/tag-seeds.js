const {Tag} = require('../models');
const tagdata = [
{
    tag_name: 'Olympic events',
},
{
    tag_name: 'Track & field',
},
{   
    tag_name: 'Basketball'
},
{
    tag_name: 'Gymnastics',
},
{
    tag_name: 'Equestrian',
},
{
    tag_name: 'Fencing',
},
{
    tag_name: 'badminton',
},
{
    tag_name:'wrestling',

}]

const seedstags = () => tagdata.bulkcreate(tagdata);
module.exports = seedstags;
