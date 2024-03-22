// Traccia 1:
// Crea una rubrica contenente una lista di contatti e con le seguenti funzionalita':
// Mostrare o nascondere la lista dei contatti
// Popolare la tabella con i contatti presenti nell’array di partenza
// Aggiungere un nuovo contatto
// Eliminare un contatto in rubrica
// Modificare un contatto presente in rubrica

// let rubrica = {
//   'contacts': [
//     {'name': 'Matteo', 'number': 33333333},
//     {'name': 'Nicola', 'number': 33344444},
//     {'name': 'Marco', 'number': 33355555}
//   ]
// }

let btnShow = document.querySelector('#btnShow');
let inputName = document.querySelector('#inputName');
let inputNunber = document.querySelector('#inputNunber');
let btnAdd = document.querySelector('#btnAdd');
let inputDelete = document.querySelector('#inputDelete');
let btnDel = document.querySelector('#btnDel');
let list = document.querySelector('#list');
let listWrapper = document.querySelector('#listWrapper');

let isVisible = false;


btnShow.addEventListener('click', () => {
    if (!isVisible) {
        list.classList.remove('d-none');
        btnShow.innerHTML = '<i class="bi bi-eye"></i>  Show/Hide';
        isVisible = true;
    } else {
        list.classList.add('d-none');
        btnShow.innerHTML = '<i class="bi bi-eye-slash"></i>  Show/Hide';
        isVisible = false;
    }
});


let rubrica = {
    'contacts': [
      {'name': 'Matteo', 'number': '33333333'},
      {'name': 'Nicola', 'number': '33344444'},
      {'name': 'Marco', 'number': '33355555'}
    ],

    'printContact': function() {
        this.contacts.forEach(contact => {
            let row = document.createElement('tr');
            row.innerHTML = `
            <th>${contact.name}</th>
            <td>${contact.number}</td>
            `;
            listWrapper.appendChild(row);
        });
    },

    'createContact': function(newName, newNumber) {
        let newContact = {'name': newName, 'number': newNumber};
        
        this.contacts.push(newContact);

        inputName.value = '';
        inputNunber.value = '';
    },

    'deleteContact': function() {
        let listMap = this.contacts.map(contact => contact.name).indexOf(inputDelete.value);
        if (listMap >= 0) {
            this.contacts.splice(listMap, 1);
        } else {

        }
        
        listWrapper.innerHTML = '',
        this.printContact();
    },
};

// bottone per l'aggiunta di un nuovo contatto
btnAdd.addEventListener('click', () => {
    listWrapper.innerHTML = '',
    rubrica.createContact(inputName.value, inputNunber.value);
    rubrica.printContact();
});

btnDel.addEventListener('click', () => {
    rubrica.deleteContact();
    inputDelete.value = '';
});



// creo la lista con i contatti
rubrica.printContact();