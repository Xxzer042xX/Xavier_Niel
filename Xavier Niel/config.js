// config.js
const { GatewayIntentBits } = require('discord.js');
const path = require('path');

const clientConfig = {
  intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages, 
    GatewayIntentBits.MessageContent, 
    GatewayIntentBits.GuildMembers,
  ]
};

const THANKED_MEMBERS_FILE = path.join(__dirname, 'thankedMembers.json');

module.exports = { clientConfig, THANKED_MEMBERS_FILE };
