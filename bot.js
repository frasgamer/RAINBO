const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "-";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("ready", () => { // كود رينبو
  function lol() {
    client.guilds.get('516265738697441286').roles.find("name", "admin").setColor("RANDOM");
  };
  setInterval(lol, 1000);
});




client.login(process.env.BOT_TOKEN);
