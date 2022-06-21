// Consegna:
// Data una lista della spesa, stampare sulla pagina (anche brutalmente,
//  basta che si vedano)
//  gli elementi della lista individualmente con un ciclo while.
// Consigli:
// Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio
//  del ciclo while
// Ricordiamoci di incrementare il contatore, o comunque di 
// inserire una condizione di uscita, all'interno ciclo while

const shoppingList = ['pane', 'formaggini', 'uova', 'salame', 'verdurine', 'cioccolato', 'banane']


let listWrapper = document.querySelector('.list_wrapper');
console.log(listWrapper);

let i = 0;

while (i < shoppingList.length) {
    console.log(shoppingList[i]);

    let shoppingItem = document.createElement('li');
    shoppingItem.innerHTML = shoppingList[i];

    listWrapper.append(shoppingItem);

    i++
}
