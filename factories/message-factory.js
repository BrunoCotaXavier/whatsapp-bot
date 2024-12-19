const requestApi = require("../api/request-api");
const MessageUseCases = require("../useCases/message-cases");

const processMessages = async (event, sendMessage) => {
    const changesParse = JSON.parse(event.body)
    console.log(changesParse)

    if (changesParse.object !== 'whatsapp_business_account') return;

    // percorro lista de entry do evento depois as changes
    for (const entry of changesParse.entry) {
        for (const change of entry.changes) {
            
            const textInput = change.value.messages[0].text.body;
            const message = new MessageUseCases()
            await message.active(textInput, change, sendMessage)
        }
    }
}

const sendMessage = async (to, text) => {
    const messageText = text;

    const message = {
        messaging_product: 'whatsapp',
        to: to,
        type: "text",
        text: {
            body: messageText,
        },
    };
    console.log('### mensagen ', message);

    try {
        const response = await requestApi('POST', '/messages', message)
        console.log('### Response do POST', response);
    } catch (error) {
        console.log('### Error do POST', error);
        console.error('Error sending message:', error.response ? error.response.data : error.message);
    }
};


module.exports = { sendMessage, processMessages }