const sessionStates = {};

// TODO: consigo controlar um fluxo de mensagem por um curto periodo. (quanto tempo? tempo de exec lambda 15m)
// Caso de uso, envio de mensagem para diversos contatos:
//  1. receber palavra chave de ativação do caso de uso.
//  2. bot responder com possiveis ações.
//      2.1 informar a importancia da coezão da mensagem para o bom funcionamento do bot.
//      2.2 ação de encaminhar em uma mensagem só uma lista de até 10 contatos separados por virgula. exemplo 5511998610056.
//      2.3 ação de cancelar caso de uso.
//  3. receber a lista de numeros e salvar em um banco.
//      3.1 valida a coesão dos numeros na lista.
//      3.2 bot informa caso erro na coesão da lista. (erro volta para 2.)
//      3.3 bot informa caso sucesso na coesão da lista. (continua caso de uso)
//      3.4 bot solicita input de texto para ser enviado.
//  4. recebe o input e salva em um banco.
//      4.1 valida a coesão do input.
//      4.2 bot informa caso erro na coesão do input. (erro volta para 4.)
//      4.3 bot informa caso sucesso na coesão do input. (continua caso de uso)
//      4.4 bot informa que tudo está pronto.
//      4.5 bot solicita comfirmar para encaminhar as mensagens.
//  5. caso o bot saia do caso de uso.
//      5.1 bot informa que nao entendeu a solicitação.
//      5.2 leva usuario para caso de uso 2.1 

class MessageUseCases {
    async active(textInput, change, sendMessage) {
        console.log("### parametros UseCase", textInput, change , sendMessage)
        if (!textInput || !change || !sendMessage) {
            return null;
        }

        const to = change.value.messages[0].from;
        const name = change.value.contacts[0].profile.name;

        // Inicializando o estado da conversa se não existir
        if (!sessionStates[to]) {
            sessionStates[to] = {
                stage: 0,
                name: name,
            };
        }

        // Gerenciando o fluxo de conversa
        const userSession = sessionStates[to];
        switch (userSession.stage) {
            case 0:
                if (textInput) {
                    console.log('### mensagem inteligente ativada');
                    await sendMessage(
                        to,
                        `Olá, ${userSession.name}! No que posso te ajudar?`
                    );
                    userSession.stage = 1;
                }
                break;
            case 1:
                if(textInput === 'Adm'){
                    await sendMessage(
                        to,
                        `Certo você está no modo Adm. Como posso ajudar você hoje?
                        -1 Enviar mensagem para uma lista de contatos?
                        -2 voltar ao inicio`
                    );
                    userSession.stage = 2;
                    break;
                }else {
                    await sendMessage(
                        to,
                        `Olha ${userSession.name}, não reconheço seu numero em nosso cadastro, peço que entre em contato com comercial.`
                    );
                    break;
                }
            case 2:
                if(textInput == 1){
                    await sendMessage(
                        to,
                        `Certo, pode ir me enviando uma lista em CSV de contatos que ja esou preparando tudo aqui para você`
                    );
                    userSession.stage = 2;
                    break;
                } 
                
                if (textInput === 2) {
                    await sendMessage(
                        to,
                        `Certo, você voltou ao inicio.`
                    );
                    userSession.stage = 0;
                    break;
                } 
            default:
                await sendMessage(
                    to,
                    `Desculpe, não entendi. Pode repetir?`
                );
                break;
        }
    }
}

module.exports = MessageUseCases;
