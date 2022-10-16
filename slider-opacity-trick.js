function lpSwiperMagic () {
    setTimeout(function () {
        let lpSlider = document.querySelector('.swiper.lp-slider');
        let slider__lp1 = lpSlider.querySelector('.swiper-slide-active');
        let slider__lp1__active = lpSlider.querySelector('.swiper-slide-active');
        
        if (window.innerWidth <= 479) {
            let slider__lp2;
            let slider__lp3;
            let slider__lp0;
        
            if (slider__lp1.nextElementSibling) {
                slider__lp2 = slider__lp1.nextElementSibling;
            }
        
            if (slider__lp2 && slider__lp2.nextElementSibling) {
                slider__lp3 = slider__lp2.nextElementSibling;
            }
        
            if (slider__lp1.previousElementSibling) {
                slider__lp0 = slider__lp1.previousElementSibling;
            }
        
        
            while (slider__lp0.previousElementSibling) {
                slider__lp0.classList.add('smooth-hide');
                slider__lp0.classList.remove('smooth-hide-half');
                slider__lp0 = slider__lp0.previousElementSibling;
            }
        
            while (slider__lp1.nextElementSibling) {
                slider__lp1.nextElementSibling.classList.add('smooth-hide');
                slider__lp1 = slider__lp1.nextElementSibling;
            }
    
            if (slider__lp2) {
                slider__lp2.classList.remove('smooth-hide');
                slider__lp2.classList.add('smooth-hide-half');
            }
            // if (slider__lp3) {
            //     slider__lp3.classList.remove('smooth-hide');
            //     slider__lp3.classList.add('smooth-hide-half');
            // }
    
            slider__lp1__active.classList.remove('smooth-hide');
            slider__lp1__active.classList.remove('smooth-hide-half');

        } else {
    
            let slider__lp2;
            let slider__lp3;
            let slider__lp0;
        
            if (slider__lp1.nextElementSibling) {
                slider__lp2 = slider__lp1.nextElementSibling;
            }
        
            if (slider__lp2 && slider__lp2.nextElementSibling) {
                slider__lp3 = slider__lp2.nextElementSibling;
            }
        
            if (slider__lp1.previousElementSibling) {
                slider__lp0 = slider__lp1.previousElementSibling;
            }
        
        
            while (slider__lp0.previousElementSibling) {
                slider__lp0.classList.add('smooth-hide');
                slider__lp0.classList.remove('smooth-hide-half');
                slider__lp0 = slider__lp0.previousElementSibling;
            }
        
            while (slider__lp1.nextElementSibling) {
                slider__lp1.nextElementSibling.classList.add('smooth-hide');
                slider__lp1 = slider__lp1.nextElementSibling;
            }
    
            if (slider__lp2) {
                slider__lp2.classList.remove('smooth-hide');
                slider__lp2.classList.remove('smooth-hide-half');
            }
            if (slider__lp3) {
                slider__lp3.classList.remove('smooth-hide');
                slider__lp3.classList.add('smooth-hide-half');
            }
    
            slider__lp1__active.classList.remove('smooth-hide');
            slider__lp1__active.classList.remove('smooth-hide-half');
        }

    }, 30);    
}

lpSlider.on('slideChange', function () {
    lpSwiperMagic();
});



setTimeout(function () {
    lpSwiperMagic();
}, 2000);

