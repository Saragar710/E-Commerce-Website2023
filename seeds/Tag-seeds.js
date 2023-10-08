const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'Billabong',
  },
  {
    tag_name: 'Roxy',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'black',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'violet',
  },
  {
    tag_name: 'RipCurl',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;