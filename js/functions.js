$(window).scroll(function () {
    $('.navbar').toggleClass('navbar-custom-scrolled', $(this).scrollTop() > 50);
    $('.navbar').find(".nav-image-container").toggleClass('nav-image-container-scrolled', $(this).scrollTop() > 50);
});