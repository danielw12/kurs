'use strict'

var mainHeader = document.getElementById('main-header');

mainHeader.innerHTML = 'Treść nagłówka';

var p = document.querySelector('header').children[0];
console.log(p.innerHTML);
console.log(p);
console.log(p.innerText);
console.log(p.outerHTML);

var link = document.getElementsByClassName('link')[0];

link.href = 'http://google.pl';

link.className += ' nowa-klasa';

mainHeader.style.background = 'URL(https://eloblog.pl/wp-content/uploads/2015/10/Monkey-selfie.jpg)';

mainHeader.style.height = '300px';