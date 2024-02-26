# Nom du Projet

    "Poject x"
      alias
   "Xavier Niel"

Bot de gestion Admin serveur discord, a destination des etudiants de 42.

## Table des Matières

- [Prérequis](#prérequis)
- [Installation](#installation)
- [Configuration](#configuration)
- [Utilisation](#utilisation)
- [Fonctionnalités](#fonctionnalités)
- [Contribuer](#contribuer)
- [Code de Conduite](#code-de-conduite)
- [Support](#support)
- [Roadmap](#roadmap)
- [Auteurs et Remerciements](#auteurs-et-remerciements)
- [Licence](#licence)
- [FAQ](#faq)
- [Changelog](#changelog)
- [Cheat_codes](#cheat_codes)

## Prérequis

Avant de commencer, assurez-vous d'avoir effectuer tous les prérequis suivants :

- Prérequis 1 (download Node.js version X.X ou supérieure)
- Prérequis 2 (discord et un serveur avec droits admin)

## Installation

Instructions pas à pas pour installer et configurer le projet :

- instructions_video https://youtu.be/dQw4w9WgXcQ?list=RDMMdQw4w9WgXcQ
- git clone https://github.com/

## configuration

## utilisation

VERSION RESERVEE AU ETUDIANT DE 42 DANS LE CADRE D UNE PISCINE OU D UN CURSUS !!!

- le bot n as rien d un outils officiel et toute ressemblance fortuite serais pure hazard..
- les devs ne peuvent en aucun cas etre tenus responsable de l utilisations du bot a des fin non decrite ici.
- tous personne qui telecharge le bot le fais en pleines connaissance de cause, de ce faite il accepte les conditions d utilisations.

Version publique diponible ici:

        github ==> "https://github.com/"


## fonctionnalités

le script actuel :

*Répond à !quoi avec feur! lorsque cette commande est utilisée.


*Salue chaque membre une fois par jour lorsqu'ils envoient leur premier message. Cependant, la liste des salutations quotidiennes n'est pas sauvegardée dans un fichier, elle est conservée en mémoire et réinitialisée automatiquement à minuit chaque jour grâce à node-schedule. Si le bot est redémarré, les salutations quotidiennes seront réinitialisées, indépendamment de la réinitialisation planifiée.




1. client.once('ready', callback)

Initialisation du bot et indication de sa mise en ligne sur le terminal ou est executer le bot.

2. 

Remercie les membres qui boostent le serveur avec un message dans le canal général. Cette liste des membres remerciés est sauvegardée dans un fichier 
thankedMembers.json pour la persistance.

(). client.on('message', message => {})

Gestion des commandes d'administration telles que l'expulsion de membres.

(). muteMember(message)

Permet de rendre muet un membre du serveur, limitant sa capacité à participer aux canaux vocaux et textuels.

(). unmuteMember(message)

Retire le statut de mute d'un membre, lui permettant de communiquer à nouveau sur le serveur.

(). autoModeration(message)

Détection et action automatique sur les messages contenant des mots interdits ou du spam, renforçant la modération du serveur.

(). createTemporaryChannels(message)

Création de canaux vocaux ou textuels temporaires pour des événements spécifiques, qui sont automatiquement supprimés après une période définie ou lorsque l'événement est 
terminé.elon le préfixe et le contenu du message, différentes actions sont exécutées, comme expulser un membre avec la commande !expulser.

Remercie les membres qui boostent le serveur avec un message dans le canal général. Cette liste des membres remerciés est sauvegardée dans un fichier 
thankedMembers.json pour la persistance.

*Salue chaque membre une fois par jour lorsqu'ils envoient leur premier message. Cependant, la liste des salutations quotidiennes n'est pas sauvegardée dans un fichier, elle est conservée en mémoire et réinitialisée automatiquement à minuit chaque jour grâce à node-schedule. Si le bot est redémarré, les salutations quotidiennes seront réinitialisées, indépendamment de la réinitialisation planifiée.

## contribuer

Si vous souhaitez participer a l ammelioration du projet :

- Vous pouvez egalement soutenir le projet $$ ==> ""

## code-de-conduite






## support

Si vous avez des problemes avec l'installation ou l'utilisations:

- support_video https://youtu.be/dQw4w9WgXcQ?list=RDMMdQw4w9WgXcQ
- github ==> (https://github.com/)
- discord ==> ""

## roadmap

L'objectif deffini est le suivant, realiser un bot de gestion admin pour serveur discord:

- il doit repondre a toute les fonctions disponible pour les devloppeur dans discord.
- une fois release, il dois etre simple d utilisations pour les utilisateur finaux.

## auteurs-et-remerciements

Dev == XxZer0Xx

Merci @le network

## licence

## faq

Pour toute questions:

- github ==> (https://github.com/)
- discord ==> ""
- twitter ==> ""


## changelog

## cheat_codes

commande uniquement disponible en mode admin:

- "!simulnouveau" == teste l evenement "message d acceuil au nouveau membres sur "welcome_and_rules" lors de leur premiere connexion sur le serveur.

commande disponible pour @everyone:

- "H2G2"

commande uniquement disponible pour user:

Dia:

- "_dia"


