$(document).ready(function () {
    function isMobile() {
        if ($('.is-mobile').css('display') === 'block') {
            return true;
        } else {
            return false;
        }
    }

    $(".hero__slider").slick({
        dots: false,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 800,
        infinite: true,
        pauseOnHover: false,
        pauseOnFocus: false
    });

    $('.client-access__link').on('click', function (e) {
        e.preventDefault();

        if (isMobile()) {
            $(this).parent().fadeOut();
            setTimeout(function () {
                $('.footer-login__form-wrap').fadeIn();
            }, 400)
        }
        else {
            $('.footer-login__form-wrap').toggleClass('is-invisible');
        }
    });

    $('.footer-login__form').on('submit', function (e) {
        e.preventDefault();

        $('.footer-login__form').get(0).reset();
        $('.footer-login__form').find('.form__input-username').val('Unrecognized User');
    });

    $('.footer-login__form-close').on('click', function (e) {

        $('.footer-login__form').get(0).reset();
        $('.footer-login__form-wrap').fadeOut();


        setTimeout(function () {
            $('.client-access__link-wrap').fadeIn();
        }, 400)

    });

    function handlePlaceholder(){
        var username = $('.form__input-username'),
            password = $('.form__input-password');

        if(isMobile()){
            username.attr('placeholder', 'Username');
            password.attr('placeholder', 'Password');
        }else{
            username.attr('placeholder', '');
            password.attr('placeholder', '');
        }
    }

    $(window).resize(function () {
        if(isMobile()){
            $('.client-access__link-wrap').fadeIn();
            $('.footer-login__form-wrap').fadeOut();
        }else{
            $('.client-access__link-wrap').fadeIn();
            $('.footer-login__form-wrap').fadeIn().addClass('is-invisible');
        }

        handlePlaceholder();
    });

    $(window).on('scroll', function (e) {
    });

    $(window).on('orientationchange', function () {
    });

});
