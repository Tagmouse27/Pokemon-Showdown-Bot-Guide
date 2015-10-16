﻿exports.translations = {
	commands: {
		game: {
			'games': 'Lista de juegos disponibles',
			'already1': 'Ya hay un juego de',
			'already2': 'en esta sala',
			'args1': 'Algunos parámetros para el juego de',
			'args2': 'no son válidos. Los disponibles son',
			'err': 'No se pudo iniciar el juego debido a un error desconocido'
		},
		endgame: {
			'nogame': 'No hay ningún juego en esta sala',
			'del1': 'El juego de',
			'del2': 'ha sido finalizado'
		}
	},

	games: {
		pokehangman: {
			'help': 'Usa __$TOKENg [palabra/letra]__ para jugar',
			'grats1': 'Feliciades a',
			'grats2': 'por ganar el juego de Poke-Hangman! La palabra era',
			'lose1': '**El juego ha terminado!** Se ha excedido el máximo numero de fallos y',
			'lose2': 'fue ahorcado! La palabra era',
			'end': 'El juego de Poke-Hangman ha sido finalizado. La palabra era'
		},
		pokeanagrams: {
			'and': 'y',
			'start': 'Un nuevo juego de **Poke-Anagrams** ha sido creado!',
			'maxgames1': 'Serán un máximo de',
			'maxgames2': 'rondas',
			'maxpoints1': 'Si alguien consigue',
			'maxpoints2': 'puntos, gana',
			'timer1': 'Teneis',
			'timer2': 'segundos para adivinar cada palabra',
			'help': 'Usa __$TOKENg [palabra]__ para adivinar las palabras',
			'point2': 'por adivinar la palabra',
			'point3': 'Puntuación',
			'timeout': '**El tiempo ha terminado!** La palabra era',
			'lose': '**El juego de Poke-Anagrams ha terminado!** Sin embargo nadie ha conseguido ningún punto, por lo que no hay ganadores',
			'end': 'El juego de Poke-Anagrams ha terminado!',
			'grats1': 'Felicidades a',
			'grats2': 'por ganar el juego con',
			'points': 'puntos',
			'tie1': 'El resultado es un empate a',
			'tie2': 'entre',
			'forceend1': 'El juego de Poke-Anagrams ha sido finalizado!',
			'forceend2': 'La palabra era'
		},
		blackjack: {
			'and': 'y',
			'total': 'Total',
			'init': '**Se ha iniciado un juego de BlackJack!** Usa **$in** para participar y **$start** para iniciar el juego',
			'start': 'El juego de BlackJack ha comenzado!',
			'topcard': 'Primera carta de la Banca',
			'turn1': 'Turno de',
			'turn2': '!',
			'helpturn1': 'Usa **$hit** para pedir cartas y **$stand** para quedarse y finaliar el turno (tienes un máximo de',
			'helpturn2': 'segundos)',
			'hand1': 'Mano de',
			'hand2': '',
			'stand': 'se queda',
			'hit': 'recibe una carta extra! Mano',
			'bj': 'tiene un BlackJack',
			'bust': 'ha sobrepasado al límite con',
			'timeout1': 'El tiempo para el turno de',
			'timeout2': ' ha termminado',
			'dealer': 'La Banca',
			'dhand': 'Mano de la Banca',
			'dbj': 'La Banca tiene un BlackJack! Más suerte la próxima',
			'dbust1': 'La Banca ha sobrepasado al límite con',
			'dbust2': 'Es vuestro día de suerte!',
			'end': 'El juego de BlackJack ha terminado!',
			'grats1': 'Felicidades a',
			'grats2': 'por ganar el juego',
			'natural': 'por conseguir un BlackJack',
			'lose': 'Lamentablemente, nadie ha ganado esta vez',
			'forceend': 'El juego de BlackJack ha sido finalizado',
			'yourhand': 'Mano',
			'noplayers': 'No hay ningún jugador apuntado al juego',
			'players': 'Jugadores'
		}
	}
};
