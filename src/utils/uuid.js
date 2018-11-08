const uuidv4 = require('uuid/v4');

const generate = ({ dash = false } = {}) => {
  const uuid = uuidv4();
  return dash ? uuid : uuid.split('-').join('');
};

module.exports = {
  generate
};
