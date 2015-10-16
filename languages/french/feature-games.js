﻿exports.translations = {
	commands: {
		game: {
			'games': 'Liste des jeux disponibles',
			'already1': 'Il est déjà un jeu de',
			'already2': 'dans cette salle',
			'args1': 'Quelques arguments pour',
			'args2': 'jeu ne sont pas valides. Ceux sont valides',
			'err': 'Erreur inconnue. Impossible de démarrer le jeu.'
		},
		endgame: {
			'nogame': 'Il n\'y a pas de jeux dans cette salle',
			'del1': 'Le jeu de',
			'del2': 'a été résilié'
		}
	},

	games: {
		pokehangman: {
			'help': 'Utiliser __$TOKENg [mot/char]__ à jouer',
			'grats1': 'Félicitations à',
			'grats2': 'pour gagner le jeu Poke-Hangman! Le mot était',
			'lose1': '**Game over!**  Nombre maximum d\'échecs a été dépassée et',
			'lose2': 'fut pendu! Le mot était',
			'end': 'Le jeu Poke-Hangman a été résilié. Le mot était'
		},
		pokeanagrams: {
			'and': 'et',
			'start': 'Un nouveau jeu de **Poke-Anagrams** a été créé!',
			'maxgames1': 'Ce sera un max de',
			'maxgames2': 'jeux',
			'maxpoints1': 'Si quelqu\'un obtient',
			'maxpoints2': 'points, il / elle gagne',
			'timer1': 'Vous avez',
			'timer2': 'secondes pour deviner chaque mot',
			'help': 'Utiliser __$TOKENg [mot]__ pour deviner les mots',
			'point2': 'pour deviner le mot',
			'point3': 'Score actuel',
			'timeout': '**Le temps s\'est écoulé!** Le mot était',
			'lose': '**Le jeu Poke-Anagrams terminé!** Mais personne n\'a eu aucun point donc il n\'y a pas de gagnants',
			'end': 'Le jeu Poke-Anagrams terminé!',
			'grats1': 'Félicitations à',
			'grats2': 'pour gagner le jeu avec',
			'points': 'points',
			'tie1': 'Le résultat est un match nul à',
			'tie2': 'entre',
			'forceend1': 'Le jeu Poke-Anagrams a été résilié!',
			'forceend2': 'Le mot était'
		},
		blackjack: {
			'and': 'et',
			'total': 'Total',
			'init': '**Un nouveau jeu de BlackJack a été créé!** Utiliser **$in** pour participer et **$start** pour lancer le jeu',
			'start': 'Le jeu de Black jack a commencé!',
			'topcard': 'Haut la carte de Marchand',
			'turn1': 'Le tour de',
			'turn2': '!',
			'helpturn1': 'Utilisez **$hit** pour obtenir de nouvelles cartes et **$stand** de mettre fin à votre tour (vous avez un maximum de',
			'helpturn2': 'secondes)',
			'hand1': 'La main de',
			'hand2': '',
			'stand': 'se tient',
			'hit': 'a obtenu une nouvelle carte! Main',
			'bj': 'a un BlackJack',
			'bust': 'a éclaté avec',
			'timeout1': 'Le temps est pour le tour de',
			'timeout2': '',
			'dealer': 'Marchand',
			'dhand': 'La main de Marchand',
			'dbj': 'Le Marchand a un BlackJack! Plus de chance la prochaine fois',
			'dbust1': 'Le Marchand a éclaté avec',
			'dbust2': 'Ceci est votre jour de chance!',
			'end': 'Le jeu de BlackJack est terminée!',
			'grats1': 'Félicitations à',
			'grats2': 'pour gagner le jeu',
			'natural': 'pour obtenir un BlackJack naturel',
			'lose': 'Désolé, il n\'y a pas de gagnants cette fois',
			'forceend': 'Le jeu de BlackJack a été résilié',
			'yourhand': 'Ta main',
			'noplayers': 'Il n\'y a pas les joueurs participant à ce jeu',
			'players': 'Joueurs'
		}
	}
};
