// Importation des modules nécessaires
require('dotenv').config(); // Charge les variables d'environnement depuis un fichier .env
const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const schedule = require('node-schedule');
const { clientConfig } = require('./config');
const { loadThankedMembers, saveThankedMembers, resetThankedMembers } = require('./members');

// Initialisation du client Discord avec les intents requis
const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

// Chargement des membres déjà remerciés
let thankedMembers = loadThankedMembers();
// Initialisation d'un ensemble pour les salutations quotidiennes
const greetedMembersToday = new Set();

// Événement 'ready'
client.once('ready', () => {
    console.log('Le bot est prêt.');

    // Réinitialisation quotidienne des salutations
    schedule.scheduleJob('0 0 * * *', () => {
        greetedMembersToday.clear();
        console.log('Réinitialisation des salutations quotidiennes.');
    });

    // Réinitialisation mensuelle des remerciements
    schedule.scheduleJob('0 0 1 * *', () => {
        resetThankedMembers();
        thankedMembers = new Set();
        console.log('Réinitialisation des membres remerciés.');
    });

    // Planification d'un message quotidien
    schedule.scheduleJob('10 18 * * *', countdownToAugust19);
});



function countdownToAugust19() {
    const today = new Date();
    const currentYear = today.getFullYear();
    // Le mois d'août est le 7ème mois en indexation 0
    const targetDate = new Date(currentYear, 7, 19);
    // Si la date actuelle dépasse le 19 août, ciblez le 19 août de l'année suivante
    if (today > targetDate) {
        targetDate.setFullYear(currentYear + 1);
    }
    // Calcul de la différence en jours
    const diffTime = Math.abs(targetDate - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // Construction et envoi du message
    const messageText = `Il reste ${diffDays} jours avant le 19 août ${targetDate.getFullYear()}.`;
    const eventLink = "https://discord.com/events/1207071388305854575/1207727471584350319";
    const message = `@everyone ${messageText} \n[Don't panique!](${eventLink})`;

    // Remplacer par l'ID du canal cible
    const channelId = '1207071388305854580';
    client.channels.fetch(channelId)
        .then(channel => channel.send(message))
        .catch(console.error); // Gestion des erreurs lors de la récupération ou l'envoi du message
}

// Gestion des nouveaux membres
client.on('guildMemberAdd', member => {
    const welcomeChannelId = '1207071388305854578';
    const welcomeChannel = member.guild.channels.cache.get(welcomeChannelId);
    const rulesChannelId = '1207071388305854577'; // Remplacez ceci par l'ID réel du salon des règles

    if (welcomeChannel) {    } else {
        welcomeChannel.send(`Bienvenue ${member}! Assurez-vous de lire les [règles](<#${rulesChannelId}>).`);
        console.log("Canal d'accueil non trouvé.");
    }
});

// Gestion des remerciements pour les boosts
client.on('guildMemberUpdate', (oldMember, newMember) => {
    const boosterRoleId = '1207736264598757417';
    const thankYouChannelId = '1207071388305854578';
    const thankYouChannel = newMember.guild.channels.cache.get(thankYouChannelId);

    if (newMember.roles.cache.has(boosterRoleId) && !thankedMembers.has(newMember.id)) {
        thankedMembers.add(newMember.id);
        saveThankedMembers(thankedMembers);

        if (thankYouChannel) {
            thankYouChannel.send(`Merci ${newMember} pour le boost !`);
        }
    }
});

// Salutations journalières
client.on('messageCreate', message => {
    if (!message.author.bot) {
        const today = new Date().toDateString();
        const memberKey = `${message.author.id}-${today}`;

        if (!greetedMembersToday.has(memberKey)) {
            const generalChannelId = '1207071388305854578';
            const generalChannel = message.guild.channels.cache.get(generalChannelId);

            if (generalChannel) {
                generalChannel.send(`Bonjour ${message.author}! C'est super de te revoir parmi nous.\nQue vas-tu apprendre aujourd'hui ?\nDu Shell ? Du C ? Ou voyager avec un peu de computer-science ?`);
                greetedMembersToday.add(memberKey);
            }
        }
    }
});

// Connexion du bot avec le token sécurisé
client.login(process.env.DISCORD_TOKEN);
