$(document).ready(function() {
    // MODAL
    var modalText = {
        praha1: "../img/praha/praha1.jpeg",
        praha2: "../img/praha/praha2.jpeg",
        praha3: "../img/praha/praha3.jpeg",
        danang1: "../img/danang/danang1.jpg",
        danang2: "../img/danang/danang2.jpg",
        danang3: "../img/danang/danang3.jpg",
        danang4: "../img/danang/danang4.jpg",
    };

    $('#gallery .project-card').on('click', function() {
        fillModal(this.id);
        $('.modal-wrap').addClass('visible');
    });

    $('.modal-close').on('click', closeModal);
    $('.mask').on('click', closeModal);

    function closeModal() {
        $('.modal-wrap').removeClass('visible');
        $('#modal-image').attr('src', '');
    }


    function fillModal(id) {
        $('#modal-image').attr('src', modalText[id])
    }
});