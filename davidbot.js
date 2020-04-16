'use strict'

const TelegramBot = require('node-telegram-bot-api');


module.exports = function(){
//const token = 'YOUR_TELEGRAM_BOT_TOKEN';
const token = '1135851854:AAFm6zl5RKKC17HVFJ1YePEZ5myuMn4cfjk';

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/echo (.+)/, (msg, match) => {
  //vai reinviar a informação que vc digitou como resposta
  const chatId = msg.chat.id;
  const resp = match[1]; 
  bot.sendMessage(chatId, resp);
});
/*
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

   bot.sendMessage(chatId, 'Received your message');
});
*/
}