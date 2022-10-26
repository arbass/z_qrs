let h2__section = document.querySelector('[cpage-section="h2-section"]');
let h2__section__mainImages = h2__section.querySelectorAll('.l-component-rich-photo_photo-wrapper img');
let h2__section__srcImage = h2__section.querySelector('.l-component-rich-photo_rich-text-column img');
let h2__section__srcImage_src = h2__section__srcImage.getAttribute('src');

h2__section__mainImages.forEach(image => {
    image.setAttribute('src', h2__section__srcImage_src);
});