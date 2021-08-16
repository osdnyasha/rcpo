$(document).ready(function(){

    $(window).load(function() {
        setTimeout(function() {
            $('.overlay').fadeOut('slow', function() {});
        }, 900);
    });



    $('.partners-stick').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplaySpeed: 1000,
        autoplay: true,
        variableWidth: true
    });


    const menu = document.querySelector('.menu'),
        menuOpenBtn = document.querySelector('.menu__btn'),
        menuCloseBtn = document.querySelector('.menu__close-btn'),
        menuBackBtn = document.querySelector('.menu__back-btn'),
        menuLinks = document.querySelectorAll('.menu__link--arrow');


    const defaultOptions = [
        {class: '.menu__level--one', option:'left', value: '800px'},
        {class: '.menu__level--two', option:'left', value: '800px'},
        {class: '.menu__level--main', option:'left', value: '40px'},
        {class: '.menu__back-btn', option:'opacity', value: '0'}
    ];

    function setDefaultMenu(){
        defaultOptions.forEach(item => {
            $(item.class).css(item.option,item.value);
        });
    }

    menuOpenBtn.addEventListener('click', () => {
        menu.style.right = 0;
    });

    menuCloseBtn.addEventListener('click', () => {
        menu.style.right = '-100%';
        setTimeout(setDefaultMenu,1000);
    });

    menuBackBtn.addEventListener('click', () => {
        setDefaultMenu();
    });

    menuLinks.forEach((item) => {
        item.addEventListener('click', (e) => {
            if(e.target.dataset['target']) {
                $('.menu__level--main').css('left','-4000px');
                $('.menu__level--' + e.target.dataset['target']).css('left','40px');
                $('.menu__back-btn').css('opacity','1');
            }
        })
    });

    setTimeout(function() {
        $(".animation--1").animated("fadeInUp", "fadeOutDown");
        $(".animation--2").animated("zoomIn", "zoomOut");
        $(".animation--3").animated("fadeIn", "bounceOut");
        $(".animation--4").animated("fadeInDown", "slideOutUp");
        $(".animation--5").animated("fadeInUp", "slideOutUp");
        $(".animation--6").animated("fadeInLeft", "slideOutUp");
        $(".animation--7").animated("fadeInRight", "slideOutUp");
    }, 1300);

    
	

});


