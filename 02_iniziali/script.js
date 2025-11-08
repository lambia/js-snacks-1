/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
const getInitials = (array) => {
	const initials = []; //variabile d'appoggio della FUNZIONE
	
	for (let i = 0; i < array.length; i++) {
		const thisWord = array[i];  //variabile d'appoggio del CICLO
		const thisInitial = thisWord[0];
		
		console.log(i, `Lavorazione di "${thisWord}". Inizia con "${thisInitial}".`);
		
		initials.push( thisInitial );
		// oppure: initials.push( thisWord[0] );
		// oppure: initials.push( array[i][0] );

		console.log(i, "Stato attuale dell'array: ", initials);
	}
	
	return initials;
};


// Invoca la funzione qui e stampa il risultato in console
let x = getInitials( names );
console.log(x);


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]