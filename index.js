const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();

folderPath = path.join(__dirname,'commands');
commandsFold = fs.readdirSync(folderPath);

const commandFiles = fs.readdirSync(folderPath).filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const filePath = path.join(folderPath, file);
    const command = require(filePath);
    if('data' in command && 'execute' in command){
        client.commands.set(command.data.name, command);
        console.log(`${command.data.name} set`);
    }
    else{
        console.log(`The file at ${filePath} does not contain the right information.`);
    }
}

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

client.login(token);