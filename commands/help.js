const {SlashCommandBuilder} = require('discord.js');
const {pets} = require('../database.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('List all available commands.'),

    async execute(interaction){
        let str
        const commandFiles = fs.readdirSync(folderPath).filter(file => file.endsWith('.js'));
        for(const file of commandFiles){
            const command = require(filePath);
            str += `Name: ${command.data.name}, Description: ${command.data.description}\n`
            await interaction.reply(str)
 
        }
    }
}