const axios = require('axios');

const get = async (url) => {
    const result = {
      url, method: 'get', response: {}
    };
    const config = {
      method: 'get',
      url
     };
    let response = {};
    try {
      response = await axios(config);
      result.response = response.data;
     console.log(response);
    } catch (e) {
      console.log(e);
    }
  
    return result;
  };

  module.exports =  get;