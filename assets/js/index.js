$(document).ready(function () {
    const section1Swiper = new Swiper('.section-1-swiper', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    const section2Swiper = new Swiper('.section-3-swiper', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    /*------------ light box ------------*/
    $('.swiper-slide').on('click', function () {
        const currentSrc = $(this).find('img').attr('src');
        openLightbox(currentSrc);
    });


    $('.lightbox-close').on('click', function () {
        closeLightbox();
    });

    $(document).mouseup(function (e) {
        const lightboxImg = $('.lightbox-img>img');
        if (!lightboxImg.is(e.target) && lightboxImg.has(e.target).length === 0) {
            closeLightbox();
        }
    });

    function openLightbox(src) {
        $('.lightbox-screen').removeClass('hidden').addClass('block');
        $('.lightbox-img img').attr('src', src);
    }

    function closeLightbox() {
        $('.lightbox-img img').attr('src', '');
        $('.lightbox-screen').removeClass('block').addClass('hidden');
    }
    /*------------ end light box ------------*/
});