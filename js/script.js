// Consegna:
// Data una lista della spesa, stampare sulla pagina (anche brutalmente,
//  basta che si vedano)
//  gli elementi della lista individualmente con un ciclo while.
// Consigli:
// Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio
//  del ciclo while
// Ricordiamoci di incrementare il contatore, o comunque di 
// inserire una condizione di uscita, all'interno ciclo while

let shoppingList = ['pane', 'formaggini', 'uova', 'salame', 'verdurine', 'cioccolato', 'banane']

let shoppingListAdded = [];

let inputElement;

let listWrapper = document.querySelector('.list_wrapper');


const addBtn = document.getElementById('addbtn');

addBtn.addEventListener('click', function(){

    document.querySelector('.list_wrapper').innerHTML = '';

    inputElement = document.getElementById('add_shopping_items').value;
    console.log(inputElement);
    shoppingList.push(inputElement);

    let i = 0;

    while (i < shoppingList.length) {
        console.log(shoppingList[i]);
    
        let shoppingItem = document.createElement('li');
        shoppingItem.innerHTML = shoppingList[i];
        shoppingItem.classList.add('list-group-item');
    
        listWrapper.append(shoppingItem);
    
        i++
    }
    


})