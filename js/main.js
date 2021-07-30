
// 1. chiedi all’utente il cognome

// 2. inseriscilo in un array con altri cognomi:
//  ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’

// 3. stampa la lista ordinata alfabeticamente

// 4. scrivi anche la posizione "umana" (partendo da 1)
//  della lista in cui il nuovo utente si trova


do {
    var surname_user = prompt('inserisci il tuo cognome');
} while (!isNaN(surname_user));
var surnames = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];

surname_user = surname_user.charAt(0).toUpperCase() + surname_user.slice(1);
surnames.push(surname_user);
surnames.sort();

var i = 0;

while (i < surnames.length) {
    var list_surnames = (i + 1) + ' - ' + surnames[i];
    console.log(list_surnames);
    i++;
}