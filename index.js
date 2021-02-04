const Discord = require('discord.js')
const bot = new Discord.Client()

// Message courant du BOT

bot.on('message', function (message) {
    if (message.content === '!bjr') {
       message.reply('Bonjour à toi')

    }
})

bot.on('message', function (message) {
        if (message.content === 'Ca va ?') {
        message.reply('Moi je sais pas toi mais moi je suis en forme !')
        
        }
})

// Faire venir (et partir) le bot dans un channel

const client = new Discord.Client();

bot.on('message', async message => {
    if (!message.guild) return;

    if (message.content === '!vient') {

    if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
    } else {
        message.reply('Pardonnez moi mais vous devez rejoindre un channel vocal dans un premier temps !');
      }
    }
  })

//Mettre de la musique Youtube

const ytdl = require('ytdl-core');
connection.play(ytdl('https://www.youtube.com/watch?v=ZlAU_w7-Xp8', { filter: 'audioonly' }));

// Files on the internet
connection.play('http://www.sample-videos.com/audio/mp3/wave.mp3');

// Local files
connection.play('/home/discord/audio.mp3');

connection.play(fs.createReadStream('./media.webm'), {
  type: 'webm/opus',
});

connection.play(fs.createReadStream('./media.ogg'), {
  type: 'ogg/opus',
});

const broadcast = client.voice.createBroadcast();

broadcast.on('subscribe', dispatcher => {
  console.log('New broadcast subscriber!');
});

broadcast.on('unsubscribe', dispatcher => {
  console.log('Channel unsubscribed from broadcast :(');
});

const dispatcher = broadcast.play('./audio.mp3');

connection.play(broadcast);





// Me dire quand le bot est allumé ou non


bot.on("ready", async () =>{
  console.log("Le bot est allumé")
  bot.user.setStatus('online');
  bot.user.setActivity("Très Utile dans le Futur");
})

// Message de benvenue et mise en place automatique du rôle "nouveau membre"


//bot.on("guildMemberAdd"), member => {
  //bot.channels.cache.get('781190618537263167').send(`Bienvenue ${member}`);
//}

// Clear les messages dans un channel

bot.on("message", message => {

  if(message.content.startsWith("!clear")){
    message.delete();
      if(message.member.hasPermission("ADMINISTRATOR")){

        let.args = message.content.trim().split(/ +/g);

        if(args[1]){
          if(!isNaN(args[1]) && arg[1] >= 1 && args[1] <= 99){

          message.channel.bulkDelete(args[1])
//Ne marche pas pour l'instant
        }
      }
    }
  }
})

bot.login(process.env.TOKEN);'Nzk2NzI4MjcxODI3NzYzMjIw.X_cJBg.HPclXoaHiXNoFW65CkXeh_PMMVI')