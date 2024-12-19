const axios = require('axios');
const { processMessages, sendMessage } = require('../factories/message-factory')

const listenersResquestPost = async (event) => {
    console.log('### Acionei o webhook POST')
    await processMessages(event, sendMessage)
}

module.exports = listenersResquestPost;