const axios = require('axios')

const getClima = async (lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=a5d5f883b1be526588bafe6cb0c8767f&units=metric`)
    
    return resp.data.main.temp
}

module.exports = {
    getClima
}