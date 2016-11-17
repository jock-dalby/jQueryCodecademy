$(document).ready(function(){
    $('#one').after('<p>Hello!</p>');
    $('#two').after($('p'));
});
