'use strict';

$(function(){
    //pobieranie elementów po znaczniku
    var paragrafy = $('p');
    console.log(paragrafy);
    
    //pobieranie elementów po id
    var paragrafById = $('#paragraf');
    console.log(paragrafById);
    
    //pobireranie elementów po klasie
    var paragrafByClassName = $('.paragraf-next');
    console.log(paragrafByClassName);
});
