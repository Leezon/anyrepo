const axios = require('axios');

const getRepoList = (url = 'https://api.github.com/users/Leezon/repos') =>
  axios.request({
    url,
    method: 'get',
  });

module.exports = getRepoList;
