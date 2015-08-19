$('.navbar').click(function() {
    $('#display').text('this is where the relevant info will go');
    $('.navbar').removeClass('.selected'); //trying to remove selected class here
    $(this).addClass('.selected'); //so that the most recently clicked is the only one that has it
});