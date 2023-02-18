$(function () {
    $("#included__header").load("modules/header/index.html");
    $("#included__footer").load("modules/footer/index.html");
    $("#included__preloader").load("modules/preloader/index.html");
    $("#included__header-en").load("modules/header/index_en.html");
    $("#included__footer-en").load("modules/footer/index_en.html");
});

window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
}

$(function() {
    const hiddenText = $('.how-it-works__content--hidden-text');
    const readMoreBtn = $('.how-it-works__read-more');

    readMoreBtn.on('click', function () {
        hiddenText.addClass('active');
        $(this).hide();
    });
});

$(function() {
    $('.open-btn').on('click', function(event){
        $('.modal-bg').addClass('modal-bg--active');
    });

    $('.modal-bg, .modal__close, .close-second-step').on('click', function(event){
        $('.modal-bg').removeClass('modal-bg--active');
    });

    $('.modal').on('click', function(event){
        event.stopPropagation();
    });
});
