/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
const filterByInitial = (array, letter) => {
	const results = [];
	const letterToCheck = letter.toLowerCase();

	for (let i = 0; i < array.length; i++) {
		const thisWord = array[i];
		const thisInitial = thisWord[0].toLowerCase();

		console.log(i, `Lavorazione di "${thisWord}". Inizia con "${thisInitial}".`);

		if (thisInitial === letterToCheck) {
			results.push(thisWord);
		}

		console.log(i, "Stato attuale dell'array: ", results);
	}

	return results;
};

// Invoca la funzione qui e stampa il risultato in console
console.log(filterByInitial(names, 'a'));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]