$(function() {
    posFilterBar($('.filter').first());

    $('.filter').click(function() {
        posFilterBar(this);
    });

    function posFilterBar(elem) {
        var origin = $(elem)
            .parent()
            .offset().left;
        var pos = $(elem).offset().left;
        $('.float-bar').css({
            left: pos - origin,
            width: $(elem).innerWidth()
        });
        $('.float-bar .row-direction').css('left', (pos - origin) * -1);
    }

    // GALLERY
    $('#gallery').mixItUp({
        load: {
            filter: '.praha'
        }
    });

    $('#close').click(function() {
        $('#success').removeClass('expand');
    });
});