const axios = require('axios');
const token = process.env.FACEBOOK_TOKEN;
const numberId = `${process.env.NUMBER_ID}`;

const requestApi = async (method, url, message) => {
    const urlApi = `https://graph.facebook.com/v20.0/${numberId}${url}`
    console.log('### urlApi' ,urlApi)
    console.log(token)
    console.log(numberId)
    try {
        const response = await axios({
            method: method,
            url: urlApi,
            data: message,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        });
        return response;
    } catch (error) {
        console.log('### Erro na requestApi: ', error)
        throw new Error("Erro forçado para teste", error);
    }
}

module.exports = requestApi;