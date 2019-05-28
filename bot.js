const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on("ready", async() =>{
	console.log(`client ${client.user.username} đã online!`);
	client.user.setStatus("Idle");
	client.user.setActivity("bé đang tập nói",{type: "PLAYING"});
});

client.on('message', async message => {
    if (message.content === 'myon ơi' || message.content === 'Myon ơi' || message.content === 'myon à' || message.content === 'Myon à'|| message.content === 'Myon ới ời ơi'|| message.content === 'myon ới ời ơi') {
        message.channel.send('dạ ._.');
    }
});
client.on('message', async message => {
    if (message.content === 'cười đi em') {
        message.channel.send('hihi cười đó');
    }
});

client.on('message', async message => {
    if (message.content === 'Rụng tờ rứng') {
        message.channel.send('Lụm lụm kìa');
    }
});

client.on('message', async message => {
    if (message.content === 'vẫy tay nào') {
        message.channel.send('<a:wavinghi:481836075589959680>');
    }
});

client.on('message', async message => {
  if (message.content === 'hello'|| message.content === 'hi'|| message.content === 'xin chào'|| message.content === 'Hello'|| message.content === 'Hi') {
    message.reply('<a:wavinghi:481836075589959680>');
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
