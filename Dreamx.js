﻿const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dreamx");


client.on("ready", () => {
let channel =     client.channels.get("528786781194158082")
setInterval(function() {
channel.send(`spaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaam`);
}, 25)
})
 
 
client.login('NTE1OTA1OTAzMjEyNDk0ODUw.DvLZzQ.qk2XwP6NJObqkwATJBx-NrgBKTI');