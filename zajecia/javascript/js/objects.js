'use strict'

class Uzytkownik {
    constructor(imie, nazwisko) {
        this.imie = imie;
        this.nazwisko = nazwisko;
    }
    wyswietlInfo() {
        console.log("Imię: " + this.imie + ", Nazwisko: " + this.nazwisko);
    }
}

var krystian = new Uzytkownik('Krystian', 'Dziopa');

krystian.wyswietlInfo();

var wojtek = new Uzytkownik('Wojtek', 'Potocki');

wojtek.wyswietlInfo();

var osoba = {
    imie: "Marcin",
    wzrost: 180,
    przedstawSie: function() {
        console.log("Mam na imię " + this.imie + ", mam " + this.wzrost + " cm wzrostu.");
    }
}

//console.log(osoba.imie);
//
//osoba.przedstawSie();
//
//osoba.nazwisko = 'Kowalski';
//
//console.log(osoba);

