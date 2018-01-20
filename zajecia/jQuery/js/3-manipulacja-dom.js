'use strict';

$(function(){
    //pobieranie tekstu
    var tekstParagrafuPierwszego = $('p:first');
    console.log(tekstParagrafuPierwszego.text());
    
    console.log(tekstParagrafuPierwszego.html());
    
    //dodawanie html
    $('.paragraf-next').html($('.paragraf-next').html()+" To jest <strong>paragraf</strong> z dodanym HTML");
    
    //dodanie tekstu na końcu selektora
    $('.paragraf-next').append('Treść na końcu selektora');
    
    //dodanie treści za selektorem
    $('.paragraf-next').after(' Treść za selektorem');
    
    $('#paragraf').remove();
    
    //wstawianie css
    $('h3').css({color: 'green', 'font-size': '5em'});
    
    //dodanie klasy css
    $('h1').addClass('klasa-testowa');
    
    $('h1').removeClass();
    
    //dodanie atrybutu
    $('h1').attr('nazwa-atrybutu', 'wartość-atrybutu');
    
    $('.paragraf-next').attr('id', 'id-1');
});