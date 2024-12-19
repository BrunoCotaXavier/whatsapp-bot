const listenerRequestGet = require('./listeners/listener-request-get');
const listenerRequestPost = require('./listeners/listener-request-post');

exports.handler = async (event) => {
  console.log('### sou evento', event)
  console.log('### resquestContext valor:', event.requestContext)

  // Monitora evento GET
  if (event.requestContext.http.method === 'GET') {
    await listenerRequestGet(event)
  }

  // Monitora evento POST
  if (event.requestContext.http.method === 'POST') {
    await listenerRequestPost(event)
  }
};
