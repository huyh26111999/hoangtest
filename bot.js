client.on('message', async message => {
    if (message.content === 'ping') {
        message.channel.send('pong');
    }
  });

client.on('message', async message => {
  if (message.content === 'hello'|| message.content === 'hi'|| message.content === 'xin chào'|| message.content === 'Hello'|| message.content === 'Hi') {
    message.reply(':wavinghi:');
  }
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
        message.channel.send(':wavinghi:');
    }
  });
client.login(process.env.BOT_TOKEN);
