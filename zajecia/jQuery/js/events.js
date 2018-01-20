//var naglowek = document.getElementById('first');
//
//function klikH1() {
//    alert('kliknięto w h1');
//}
//
//naglowek.addEventListener('click', klikH1);
//
//naglowek.removeEventListener('click', klikH1);
//});

$(function(){
    function klikH1() {
        alert('Klinkieto w H1');
         $('h1').off('click', klikH1); //wyłączyłem zdarzenie - zadziała raz
    }
    // pojedyncze zdarzenie na paragrafie
    $('p').click(function(){
        $(this).css('color', 'red');
    });
    
    
    //podpinanie kilku
    $('h1').on({
        'click': klikH1,
        'mouseover': function() {
            $(this).css('color', 'green');
        }
    });
    
    $('h2').hover(function() {
        $(this).css('color', 'yellow');
    }, function(){
        $(this).css('color', '');
    });
});