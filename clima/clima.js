const axios = require('axios');

const getClima = async (lat, lng)=>{
    const resp = await axios.get(`https://samples.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=5f1a7f4e1f71617b060aa118938a9b64
&units=metric`);

return resp.data.main.temp;
}

module.exports = {
  getClima
}
