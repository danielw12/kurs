'use strict';

var istniejacyWezel = document.getElementById('parFirst').children[2];
console.log(istniejacyWezel);

var newElement = document.createElement('p'); //stwórz nowy element p

var newElementContent = document.createTextNode('To jest nowy paragraf');  //wstawianie tekstu do p

newElement.appendChild(newElementContent); //dodaj tekst do elementu p

console.log(newElement);

istniejacyWezel.appendChild(newElement);

istniejacyWezel.removeChild(newElement);


var parFirstDiv = document.getElementById('parFirst');

parFirstDiv.replaceChild(newElement, istniejacyWezel);


var linki = document.querySelectorAll('a');



//for (var i = 0; i < linki.length; i++) {
//    var enter = document.createElement('br'); //tworzy entery
//    linki[i].removeAttribute('class'); //usuwa klase
//    linki[i].parentElement.insertBefore(enter, linki[i].nextSibling); //wstawia entery
//} 

linki.forEach(function(element) {
    var enter = document.createElement('br'); //tworzy entery
    element.removeAttribute('class'); //usuwa klase
    element.parentElement.insertBefore(enter, element.nextSibling); 
});