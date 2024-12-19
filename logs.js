const obj = {
  version: '2.0',
  routeKey: 'ANY /whatsApp-bot-test',
  rawPath: '/whatsApp-bot-test',
  rawQueryString: '',
  headers: {
    accept: '*/*',
    'accept-encoding': 'deflate, gzip',
    'content-length': '476',
    'content-type': 'application/json',
    host: '72epwmsw3c.execute-api.sa-east-1.amazonaws.com',
    'user-agent': 'facebookexternalua',
    'x-amzn-trace-id': 'Root=1-66a983f2-231801675f0a8d49508dc418',
    'x-forwarded-for': '173.252.127.12',
    'x-forwarded-port': '443',
    'x-forwarded-proto': 'https',
    'x-hub-signature': 'sha1=7b55a6e3bb73fcbb460a5aa604551184334860dd',
    'x-hub-signature-256': 'sha256=cfcf1d5669328cfb98e42c97e761fa68abe7c4d63b231d369908f8367bc3df7d'
  },
  requestContext: {
    accountId: '282134524372',
    apiId: '72epwmsw3c',
    domainName: '72epwmsw3c.execute-api.sa-east-1.amazonaws.com',
    domainPrefix: '72epwmsw3c',
    http: {
      method: 'POST',
      path: '/whatsApp-bot-test',
      protocol: 'HTTP/1.1',
      sourceIp: '173.252.127.12',
      userAgent: 'facebookexternalua'
    },
    requestId: 'bwGN7iD2mjQEJpg=',
    routeKey: 'ANY /whatsApp-bot-test',
    stage: '$default',
    time: '31/Jul/2024:00:23:14 +0000',
    timeEpoch: 1722385394453
  },
  stageVariables: {
    FACEBOOK_TOKEN: 'EAAazaLZAoxDcBOZCyxp4DWebvceA6N1Sw3GZCtWLKHZCDHAvVx46yLLmssoL6sW0QEiG3s9juhgMxjTI6mH6nkdxx7KImpijAW69aqEI8AcIl1aJoD52g0z1mp8L9evZCUpQqpM4ZB9zw7FuVQ5fwxSGZAHUZAYAiE6cumpFY03HGNZBRnt4XkSG6WsM6jXlrSkIjsxFRkvQp4660c4ZCfVEZBx',
    VERIFY_TOKEN: 'brunocota'
  },
  body: '{"object":"whatsapp_business_account","entry":[{"id":"404433312749531","changes":[{"value":{"messaging_product":"whatsapp","metadata":{"display_phone_number":"15550743140","phone_number_id":"376576105542010"},"contacts":[{"profile":{"name":"Bruno Cota"},"wa_id":"5511998610056"}],"messages":[{"from":"5511998610056","id":"wamid.HBgNNTUxMTk5ODYxMDA1NhUCABIYFDNBREU1Mzk3RThFQTJDM0VERTZEAA==","timestamp":"1722385393","text":{"body":"Oi"},"type":"text"}]},"field":"messages"}]}]}',
  isBase64Encoded: false
}
console.log(JSON.parse(obj.body))
const changesParse = JSON.parse(obj.body)
console.log(changesParse.entry[0])
const listChanges = changesParse.entry[0].changes
listChanges.map(e => {
  console.log(e)
  console.log(e.value.contacts, ' e ', e.value.messages)
});
/* const change = changesParse.entry[0].changes[0].value
console.log(change.contacts[0].profile.name) */