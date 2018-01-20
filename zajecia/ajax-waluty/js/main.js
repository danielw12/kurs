//form w html;  pobrać waluty;  uzupełnić select walutami;    podpiąć 'click' event;    odczytać wartości z form;    odpytać serwer z odpowiednim linkiem;      wyświetlić wynik
$(function () {

    $.getJSON('https://blockchain.info/pl/ticker', function (data) {
        $.each(data, function (key, value) {
            $('#waluta').append('<option value="' + key + '">' + key + '</option>');
        });
    });

    $('#guzik').click(function () {
        var waluta = $('#waluta').val();
        var wartosc = $('#wartosc').val();

    });
    $('#services').each( function(){ console.log('test') });
});

function pobierzBTC(waluta, wartosc) {
    $.ajax({
        url: 'https://blockchain.info/tobtc?currency='+waluta+'&value='+wartosc,
        success: function(response) {
            $('#btc').text(response);
            
        },
        error: function(response) {
            console.log(response);
        }
    });
}

 pobierzBTC();

