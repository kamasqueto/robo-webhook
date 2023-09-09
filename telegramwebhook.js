const express = require('express');
const bodyParser = require('body-parser');
const TelegramBot = require('node-telegram-bot-api');

const app = express();

app.use(bodyParser.json());

const token = '6190693318:AAE0Rh7x91AmTnKlaOB-yXO1mAf7isYuUss'; // Substitua pelo token real do seu bot
const bot = new TelegramBot(token, { polling: false });

app.post('/telegram_webhook', (req, res) => {
  const update = req.body; // Dados da atualização do Telegram
  // Faça o processamento das atualizações aqui
  console.log(update);

  res.sendStatus(200);
});

bot.setWebHook(`https://localhost:3000/telegram_webhook`); // Substitua pela URL pública do seu servidor

module.exports = app;
