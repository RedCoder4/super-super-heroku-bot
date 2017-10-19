const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '?events') {
    	message.reply('Well, this is sad! We appear to be in a blank spot. I am not able to find any events. Check back soon!');
  	}
});

client.on('message', message => {
    if (message.content === '?FAVA get ready') {
    	message.reply('FAVA Events is online and running perfectly.');
  	}
});

client.on('message', message => {
    if (message.content === '?about') {
    	message.reply('Well basically the way I work is I scan a offsite calendar and display that data in a Discord message for all to see! Right now I am 7 on a pH scale ( Basic get it?).');
  	}
});

client.on('?help', function(message) {
        // Don't forget to log the message!
        client.sendMessage(message.channel, '?events - Displays upcoming/latest event.');
  	        client.sendMessage(message.channel, '?FAVA get ready - Makes sure the bot can send messages.')
        clent.sendMessage(message.channel, '?about - Read a brief description of the bot.')
        client.sendMessage(message.channel, '?help - Display all the commands needed.')
        client.sendMessage(message.channel, '?past events - All the past events since the bot has been active. (10/17/17).')
    
});

client.on('message', message => {
    if (message.content === '?past events') {
         message.reply('Since I am so new I cannot pull old data, but one latest events was the Short Runway Challenge. That was fun!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
