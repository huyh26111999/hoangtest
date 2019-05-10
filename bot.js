const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    client.user.setActivity("bé đang tập nói",{type: "PLAYING"});
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
