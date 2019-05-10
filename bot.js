const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});


client.on('message', async message => {
    if (message.content.toLowerCase === 'ping') {
        message.channel.send('pong');
    }
    if (message.content.toLowerCase === 'hello'|| message.content === 'hi'|| message.content === 'xin chào'|| message.content === 'Hello'|| message.content === 'Hi') {
      message.reply('<a:wavinghi:481836075589959680>');
    }
    if (message.content.toLowerCase === 'cười đi em') {
      message.channel.send('hihi cười đó');
    }
    if (message.content.toLowerCase === 'myon ơi' || message.content === 'Myon ơi' || message.content === 'myon à' || message.content === 'Myon à'|| message.content === 'Myon ới ời ơi'|| message.content === 'myon ới ời ơi') {
      message.channel.send('dạ ._.');
    }
    if (message.content.toLowerCase === 'Rụng tờ rứng') {
      message.channel.send('Lụm lụm kìa');
    }
    if (message.content.toLowerCase === 'vẫy tay nào') {
      message.channel.send('<a:wavinghi:481836075589959680>');
    }
  });
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
