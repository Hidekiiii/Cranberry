const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("c!");
var randnum = 0;
bot.on("ready", function() {
    bot.user.setGame("Manger des fraises, c!help")
    console.log("Le bot a bien ete connecte")
});

bot.login("NDQxMjU0OTI3ODc3MDEzNTI1.Dcwxmw.1HoctQnukN4-SxwWTIqohWCqsEg");

bot.on("message", message => {
    if (message.content --- "ping")
        message.reply("pong)")
        console.log('ping pong')
    }

    if (message.content === prefix + "help")
        var help_embed = new Discord.RichEmbed()
            .setColor('#A20000')
            .addField("Commandes du bot !", "  -/help : Affiche les commandes du bot !")
            .addField("Interaction", "ping : Le bot répond pong.")
            .setFooter("Fait c!help2 pour afficher la deuxième page.")
        message.channel.sendEmbed(help_embed)
        //message.channel.send("Voici les commandes du bot :\n -/help pour afficher les commandes");
        console.log("Commande help Demandée !");
    }

    if (message.content === "Comment vas-tu Cranberry?")
    
        if (randnum == 1){
            message.reply("(Réponse numéro 1), Merci, je vais très bien !")
            console.log(randnum);
        }

    }
});
   
function random(min, max) {
    min = Math.ceil(0);
    max = Math.floor(3);
    randnum = Math.floor(Math.random() * (max - min +1) + min)
}
