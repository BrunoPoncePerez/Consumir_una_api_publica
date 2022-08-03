const get = require('../libs/requestLibs');


class apiNASA{
static async consumirApi(req, res){
    const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`;
    console.log('API: ', url);
    const result = await get(url);
    console.log('respuesta: ', result);
    res.json({result});
  }
}

module.exports = apiNASA;