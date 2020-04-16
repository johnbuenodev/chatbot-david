'use strict'

const TelegramBot = require('node-telegram-bot-api');


module.exports = function(){
const token = '1135851854:AAFm6zl5RKKCl7HVFJ1YePEZ5myuMn4cfjk';
//const token = 'seu tokkem';
               
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/echo (.+)/, (msg, match) => {
  //vai reinviar a informação que vc digitou como resposta
  const chatId = msg.chat.id;
  const resp = match[1]; 
  bot.sendMessage(chatId, resp);
});

bot.on('message', (msg) => {

var oi = "oi";
if (msg.text.toString().toLowerCase().indexOf(oi) === 0) {
bot.sendMessage(msg.chat.id,"Oi tudo bem com vc?");
} 
    
var tchau = "tchau";
if (msg.text.toString().toLowerCase().includes(tchau)) {
bot.sendMessage(msg.chat.id, "Gostei de conversar com você! tchau :)");

}
var comprimento1 = "bom dia";
if (msg.text.toString().toLowerCase().indexOf(comprimento1) === 0) {
bot.sendMessage(msg.chat.id,"Obrigado! Bom dia pra você também.");
} 
    
var comprimento2 = "boa tarde";
if (msg.text.toString().toLowerCase().includes(comprimento2)) {
bot.sendMessage(msg.chat.id, "Obrigado! Boa tarde pra você também.");

}

var comprimento3 = "boa noite";
if (msg.text.toString().toLowerCase().includes(comprimento3)) {
bot.sendMessage(msg.chat.id, "Obrigado! Boa noite pra você também.");

}
}); 
/*
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

   bot.sendMessage(chatId, 'Received your message');
});
*/
}