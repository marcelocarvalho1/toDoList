# toDoList

> Teoria de Document Object Model:

// Como acessar elementos DOM
const header = document.getElementById('header'); //id
const paragraph = document.getElementsByClassName('paragraph'); //class
const img = document.getElementsByTagName('img'); //tag

// Como modificar elementos DOM
paragraph.innerHTML = 'Novo Título'; //altera o conteúdo

// Ouvir eventos
const myButton = document.getElementById('myButton');
myButton.addEventListener('click', function() {
    alert('Clicou no botão');
});

// Manipular estilos
paragraph.addEventListener('click', function() {
    paragraph.style.color = 'red';
})

// Criar novos elementos
const newParagraph = document.createElement('p');
newParagraph.innerHTML = 'Novo parágrafo';
document.body.appendChild(newParagraph);

