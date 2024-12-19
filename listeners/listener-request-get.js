module.exports = listenersResquestGet = async (event) => {
    console.log('### Acionei o listener GET')

    const queryParams = event.queryStringParameters || {};
    const token = queryParams['hub.verify_token'];
    const challenge = queryParams['hub.challenge'];

    // Validação realizada para conectar ao faceboock developer
    if (token === verifyToken) {
        console.log('### Login com Sucesso')
        return {
            statusCode: 200,
            body: challenge,
        };
    } else {
        console.log('### Login com Falha')
        return {
            statusCode: 403,
            body: 'Invalid verify token',
        };
    }
}