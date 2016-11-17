$(document).ready(function(){
    $('div').click(function(){
        $('div').fadeOut('fast');
    });
    $('div').hover(function(){
        $('div').addClass('red');
    });
});
