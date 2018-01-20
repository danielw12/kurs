$(function() {

    $(window).scroll(function(){
        if($(window).scrollTop() == $(document).height() - $(window).height())
        {
            $.ajax({
                url: 'https://jsonplaceholder.typicode.com/users',
                success: function(data) {
                    data.forEach(function(element){
                        $('div:last').after('<br><div>User ID:' + element.id + '<div>User Name:' + element.username + '<div>User URL' + element.email + '</div>');
                    });
                },
                error: function(response) {
                    console(response.responseText)
                }
            });
        }
    });
});

