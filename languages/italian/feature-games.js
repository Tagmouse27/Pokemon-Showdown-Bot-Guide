﻿exports.translations = {
	commands: {
		game: {
			'games': 'Lista dei giochi disponibili',
			'already1': 'C\'è già una partita',
			'already2': 'in questa room',
			'args1': 'Alcuni argomenti per',
			'args2': 'gioco non sono validi. Quelle valide sono',
			'err': 'Errore sconosciuto. Impossibile avviare il gioco.'
		},
		endgame: {
			'nogame': 'Non ci sono giochi in questa room',
			'del1': 'Il gioco del',
			'del2': 'è stata terminata'
		}
	},

	games: {
		pokehangman: {
			'help': 'Usa __$TOKENg [parola/carattere]__ per giocare',
			'grats1': 'Congratulazioni a',
			'grats2': 'per vincere il gioco Poke-Hangman! La parola era',
			'lose1': '**Game over!** Numero massimo di errori è stata superata e',
			'lose2': 'fu impiccato! La parola era',
			'end': 'Il gioco del Poke-Hangman è stata terminata. La parola era'
		},
		pokeanagrams: {
			'and': 'e',
			'start': 'Un nuovo **Poke-Anagrams** gioco è stato creato!',
			'maxgames1': 'Sarà un max di',
			'maxgames2': 'giochi',
			'maxpoints1': 'Se qualcuno ottiene',
			'maxpoints2': 'punti, lui / lei vince',
			'timer1': 'Avete',
			'timer2': 'secondi per indovinare ogni parola',
			'help': 'Usa __$TOKENg [parola]__ per indovinare le parole',
			'point2': 'per indovinare la parola',
			'point3': 'Risultati provvisori',
			'timeout': '**Il tempo è scaduto!** La parola era',
			'lose': '**Il gioco del Poke-Anagrams finita!** Ma nessuno ha ottenuto i punti quindi non ci sono vincitori',
			'end': 'Il gioco del Poke-Anagrams finita!',
			'grats1': 'Congratulazioni a',
			'grats2': 'per vincere la partita con',
			'points': 'punti',
			'tie1': 'Il risultato è un pareggio',
			'tie2': 'fra',
			'forceend1': 'Il gioco del Poke-Anagrams è stata terminata!',
			'forceend2': 'La parola era'
		},
		blackjack: {
			'and': 'e',
			'total': 'Totale',
			'init': '**Un nuovo gioco di BlackJack è stato creato!** Utilizzare **$in** a partecipare e **$start** per iniziare il gioco',
			'start': 'Il gioco di BlackJack ha iniziato!',
			'topcard': 'Top carta scoperta del banco',
			'turn1': 'Il turno di',
			'turn2': '!',
			'helpturn1': 'Utilizzare **$hit** per ottenere nuove carte e **$stand** di terminare il tuo turno (si dispone di un massimo di',
			'helpturn2': 'secondi)',
			'hand1': 'La mano di',
			'hand2': '',
			'stand': 'stands',
			'hit': 'ha ottenuto una nuova carta! Mano',
			'bj': 'ha un BlackJack',
			'bust': 'ha rotto con',
			'timeout1': 'Il tempo è in su per il turno di',
			'timeout2': '!',
			'dealer': 'Il Banco',
			'dhand': 'Mano del Banco',
			'dbj': 'Il Banco ha un BlackJack! La prossima volta sarai più fortunato',
			'dbust1': 'Il Banco ha sballato con',
			'dbust2': 'Questo è il vostro giorno fortunato!',
			'end': 'Il gioco del BlackJack è concluso!',
			'grats1': 'Congratulazioni a',
			'grats2': 'per vincere la partita',
			'natural': 'per ottenere un Blackjack naturale',
			'lose': 'Siamo spiacenti, non ci sono vincitori questa volta',
			'forceend': 'Il gioco del BlackJack è stato chiuso',
			'yourhand': 'La tua mano',
			'noplayers': 'Non ci sono giocatori che partecipano a questo gioco',
			'players': 'Giocatori'
		}
	}
};
