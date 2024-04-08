const {SlashCommandBuilder} = require('discord.js');
const {pets} = require('../database.js');
const {embed} = require('../embed.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('play')
        .setDescription('Play with your Disgotchi!'),
    async execute(interaction){
        const userId  = interaction.user.id;
        const getPet = await pets.get(userId);
        let result = "";
        if(getPet.energy >= 10){
            getPet.energy -= 10;
            getPet.exp += 15;
            getPet.happiness += 1;
            getPet.cleanliness -= 1;
            result = `${getPet.nickname} had fun playing with you!`;
            await pets.set(interaction.user.id, getPet);
        }
        else{
            result = `${getPet.nickname} is too tired to play.`;
        }
        
        let petEmbed = await embed(interaction);
        petEmbed.content = result;
        await interaction.reply(petEmbed);
    }
}
