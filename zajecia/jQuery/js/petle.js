//var zwierzeta = ['pies', 'kot', 'rybki'];
//
//var licznik = 0;
//
//pętla while
//
//while(licznik < zwierzeta.length) {
//  console.log(zwierzeta[licznik]);
//licznik++;
//}
//
//
//PĘTLA DO WHILE
//
//if (zwierzeta.length > 0) {
//do {
//    console.log(zwierzeta[licznik]);
//    licznik++;
//} while(licznik < zwierzeta.length);
//}
//
//
//PĘTLA FOR
//
//for (var i = 0; i < zwierzeta.length; i++) {
//
//    console.log(zwierzeta[i]);
//};
//
//PĘTLA FOR EACH
//
//zwierzeta.forEach(function (element, index) {
//    console.log(element);
//});


$(function(){
    var paragrafy = $('body').find('p').eq(1).css('color', 'green');
    
    //pętla each dodająca do paragrafów klasę z kolejnym numerem
    $('p').each(function(i, element){
        $(this).addClass('paragraf-'+i);
    });
});









































