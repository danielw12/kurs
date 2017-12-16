'use-strict';

var wzrostMateusz = 190;
var wzrostOlgi = 160;

///* Warunek if */
//if (wzrostOlgi < wzrostMateusz) {
//    console.log("Olga jest niższa");
//}
//
///* Warunek if else */
//if (wzrostOlgi < wzrostMateusz) {
//    console.log("Olga jest nizsza");
//} else {
//    console.log("Olga nie jest nizsza");
//}

/* Warunek if else if */
if (wzrostOlgi < wzrostMateusz) {
    console.log("Olga jest nizsza");
    
} else if (wzrostOlgi == wzrostMateusz) {
    console.log("Olga tak wysoka jak Mateusz");
} else {
    console.log("Olga jest wyzsza");
}


/* Warunek switch */
var kolor = 'zielony';

switch (kolor) {
    case 'czerwony':
        console.log('Kolor czerwony');
        break;
    case 'zielony':
        console.log('Kolor niebieski');
        break;
    default:
        console.log('inny kolor');
}


/* pętla for */
for (var i = 1; i < 5; ) {
    console.log(i++);
}

console.log('----------------------');

for (var i = 1; i < 5;) {
    console.log(++i);
}

console.log('----------------------');


var liczby = [1, 2, 0, 10, 12, 100, 55];

liczby[0];
liczby[1];
liczby[2];

for (var i = 0; i < liczby.length; i++) {
    console.log(liczby[i]);
}
     
     
   

     

