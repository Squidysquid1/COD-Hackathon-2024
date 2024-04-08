const {SlashCommandBuilder} = require('discord.js');
const {pets} = require('../database.js');
var PetObj = require('../Pet.js');
const {embed} = require('../embed.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('clean')
        .setDescription('Give your Disgotchi a bath!'),
    async execute(interaction){
        const userId  = interaction.user.id;
        const getPet = await pets.get(userId);
        getPet.cleanliness = 10;
        getPet.energy -= 10
        let result = "Pet has been washed!";
        await pets.set(userId,getPet)
        let petEmbed = await embed(interaction);
        petEmbed.content = result;
        await interaction.reply(petEmbed);
    }
}
