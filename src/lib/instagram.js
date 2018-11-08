const got = require('got');
const uuidv4 = require('uuid/v4');

const ENDPOINT = 'https://i.instagram.com/api/v1';

const getCsrf = async () => {
  const uuidDash = uuidv4();
  const guid = uuidDash.split('-').join('');
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
