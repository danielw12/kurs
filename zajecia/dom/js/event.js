'use strict'

function alarm(event) {
    event.preventDefault(); //zapobiegamy domyślnej akcji
    console.log('kliknięto w link');
    console.log(event.type);
}

var secondLink = document.getElementsByTagName('a')[1];

secondLink.onclick = alarm;

var thirdLink = document.getElementsByTagName('a')[2];


thirdLink.removeEventListener('click', alarm);


thirdLink.addEventListener('click', function(){
    alert('funkcja anonimowa');
});

function klikHeader() {
    console.log('Kliknąłeś header');
}

document.getElementsByTagName('header')[0].onclick = klikHeader;

function klikh1(event) {
    event.stopPropagation();
    console.log('hahahaha');
}

document.getElementsByTagName('h1')[0].onclick = klikh1;