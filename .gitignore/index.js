const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Mange des fraises, c!help")
    console.log("Le bot a bien ete connecte")
});

bot.login("NDQxMjU0OTI3ODc3MDEzNTI1.DctmUQ.4gJM72HRmagIFe4Md6LO1SI7IOQ");
