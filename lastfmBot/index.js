const Discord = require("discord.js");

const client = new Discord.Client({ intents: ["GUILD_MESSAGES"]});

client.once('ready', () => {
    console.log('Hello World!');
});

client.login('ODg1OTU4ODMxOTQ1OTY1NjQ4.YTundQ.0X8CIzCtWIEZ6D4j3e6ECzfocEg');