const got = require('got');
const uuid = require('../utils/uuid');

const ENDPOINT = 'https://i.instagram.com/api/v1';

const getCsrf = async () => {
  const guid = uuid.generate();
  return got(`${ENDPOINT}/si/fetch_headers/`, {
    query: {
      challenge_type: 'signup',
      guid
    },
    json: true
  });
};

module.exports = {
  getCsrf
};
