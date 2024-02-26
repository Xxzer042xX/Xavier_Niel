// members.js
const fs = require('fs');
const { THANKED_MEMBERS_FILE } = require('./config');

function loadThankedMembers() {
    try {
        const data = fs.readFileSync(THANKED_MEMBERS_FILE, { encoding: 'utf8' });
        return new Set(JSON.parse(data));
    } catch (err) {
        console.error('Erreur lors de la lecture du fichier des membres remerciés:', err);
        return new Set(); // Retourne un ensemble vide en cas d'erreur
    }
}

function saveThankedMembers(thankedMembers) {
    try {
        fs.writeFileSync(THANKED_MEMBERS_FILE, JSON.stringify([...thankedMembers]), { encoding: 'utf8' });
    } catch (err) {
        console.error('Erreur lors de l\'écriture dans le fichier des membres remerciés:', err);
    }
}

function resetThankedMembers() {
    const thankedMembers = new Set();
    saveThankedMembers(thankedMembers);
    console.log('La liste des membres remerciés a été réinitialisée.');
}

module.exports = { loadThankedMembers, saveThankedMembers, resetThankedMembers };
