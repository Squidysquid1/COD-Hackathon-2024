const {SlashCommandBuilder} = require('discord.js');
const {pets} = require('../database.js');
const {embed} = require('../embed.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('levelup')
        .setDescription('This command can only be used by the moderators.'),
    async execute(interaction){
        let pet = await pets.get(interaction.user.id);
        let result = "You have been given 10 levels!";
        pet.lvl += 10;
        await pets.set(interaction.user.id, pet);

        // output embed
        let petEmbed = await embed(interaction);
        petEmbed.content = result;
        await interaction.reply(petEmbed);
    }
}