$(document).ready(function () {
    //click to set current menu item
    $('.navbar').click(function () {
        $('.navbar').removeClass('selected').filter(this).addClass('selected');
    });
    $('#action').click(function () {
        $('#display').text('action screen');
    });
    $('#items').click(function () {
        $('#display').text('current inventory screen');
    });
    $('#people').click(function () {
        $('#display').text('people you know screen');
    });
    $('#status').click(function () {
        $('#display').text('character status screen');
    });
    $('#jobs').click(function () {
        $('#display').text('active jobs screen');
    });
    $('#map').click(function () {
        $('#display').text('local map screen');
    });
});