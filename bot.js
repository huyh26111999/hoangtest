const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});

bot.commands = new Discord.Collection

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.legth <= 0){
        console.log("Không tìm thấy lệnh");
        return;
    }

    jsfile.forEach((f, i) =>{
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);

    });

});




bot.on("ready",async() => {
console.log(`${bot.user.username} is online!`);
bot.user.setActivity("Bé đang tập nói", {type: "LISTENING"});
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = bot.commands.get(cmd.slice(prefix.legth));
    if(commandfile) commandfile.run(bot,message,args);

    if(cmd === `${prefix}sinfo`){

        let bicon = message.guild.iconURL;
        let botember = new Discord.RichEmbed()
        .setDescription("Thông tin nơi này")
        .setColor("RANDOM")
        .addField("Tên server:", message.guild.name)
        .addField("Tạo vào:", message.guild.createdAt)
        .addField("Ngươi lạc vào lúc:", message.member.joinedAt)
        .addField("Tổng dân số:", message.guild.memberCount)
        .addField("Dân chúng:", message.guild.botCount)
        return message.channel.send(botember);
    }


    if(cmd === `${prefix}info`){
        let bicon = bot.user.displayAvatarURL;
        let botember = new Discord.RichEmbed()
        .setDescription("Ta là ai á?")
        .setColor("RANDOM")
        .addField("Bổn công chúa không muốn tiếp chuyện", bot.user.username)
        .addField("Ngày giáng thế", bot.user.createdAt)
        .setThumbnail(bicon)
        return message.channel.send(botember);
    }

    if(cmd === `${prefix}kick`){

        let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!kUser) return message.channel.send("Đó là ai?");
        let kReason = args.join(" ").slice(22);
        if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Ngươi không có quyền ra lệnh cho ta");
        if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("Đó là quan trong triều, ta không thể");
      
      
        let kickEmber = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("Bay màu piupiu~")
        .addField("BÁi bai", `${kUser} with ID &{kUser.id}`)
        .addField("Theo lệnh", `<@${message.author.id}>`)
        .addBlankField("Lúc:", message.createdAt)
        .addBlankField("Lý do", kReason);

        let kickChannel = message.guild.channels.find(`name`, "nha-môn");
        if(!kickChannel) return message.channel.send("không tìm thấy kênh")

        message.guild.member(kUser).kick(kReason)
        kickChannel.send(kickEmber);



        return;
        
    }

});

bot.on('message', async message => {
    if (message.content.toLowerCase === 'ping') {
        message.channel.send('pong');
    }
  });

bot.on('message', async message => {
  if (message.content === 'hello'|| message.content === 'hi'|| message.content === 'xin chào'|| message.content === 'Hello'|| message.content === 'Hi') {
    message.reply('<a:wavinghi:481836075589959680>');
  }
});

bot.on('message', async message => {
    if (message.content === 'myon ơi' || message.content === 'Myon ơi' || message.content === 'myon à' || message.content === 'Myon à'|| message.content === 'Myon ới ời ơi'|| message.content === 'myon ới ời ơi') {
        message.channel.send('dạ ._.');
    }
  });

  bot.on('message', async message => {
    if (message.content === 'cười đi em') {
        message.channel.send('hihi cười đó');
    }
  });

  bot.on('message', async message => {
    if (message.content === 'Rụng tờ rứng') {
        message.channel.send('Lụm lụm kìa');
    }
  });

  bot.on('message', async message => {
    if (message.content === 'vẫy tay nào') {
        message.channel.send('<a:wavinghi:481836075589959680>');
    }
  });

// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);
