function mentorSwiperMagic () {
    setTimeout(function () {
        let mentSlider = document.querySelector('.swiper.mentor-slider');
        let slider__ment1 = mentSlider.querySelector('.swiper-slide-active');
        let slider__ment1__active = mentSlider.querySelector('.swiper-slide-active');
        let slider__ment2 = slider__ment1.nextElementSibling;
        let slider__ment3 = slider__ment2.nextElementSibling;


        let allMentSlides = mentSlider.querySelectorAll('.swiper-slide');
        allMentSlides.forEach(slide => {
            slide.classList.remove('globe-top');
        });

        slider__ment2.classList.add('globe-top');
        slider__ment3.classList.add('globe-top');
        
    }, 10);    
}

mentorSlider.on('slideChange', function () {
    mentorSwiperMagic();
});

mentorSwiperMagic();

