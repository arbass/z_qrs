let curriculum__section = document.querySelector('[cpage-section="curriculum"]');
let curriculum__src = curriculum__section.querySelector('.text-rich-text.is-src');

let curriculum__titles = curriculum__section.querySelectorAll('.l-component-faq_col-1.is-course-curriculum h2');
curriculum__titles.forEach(title => {
    title.textContent = curriculum__src.querySelector('h2').textContent;
});

let curriculumSrc__allH3 = curriculum__src.querySelectorAll('h3');
let clonable__curriculumItemWaiter = curriculum__section.querySelector('.l-component-faq_col-2.is-course-curriculum');

curriculumSrc__allH3.forEach((srcH3,srcH3Id) => {
    let clonable__curriculumItem = curriculum__section.querySelector('.l-component-faq_item').cloneNode(true);
    let clonable__curriculumItem__title = clonable__curriculumItem.querySelector('.l-component-faq_curriculum h3');
    let clonable__curriculumItem__duration = clonable__curriculumItem.querySelector('.course-curriculum_duration-wrapper p');
    let clonable__curriculumItem__richText = clonable__curriculumItem.querySelector('.l-component-wyw-get_rich-text-2');
    let clonable__curriculumItem__richText__innerElements = clonable__curriculumItem__richText.querySelectorAll('*');
    clonable__curriculumItem__richText__innerElements.forEach(el => {
        el.remove();
    });

    clonable__curriculumItem__title.textContent = srcH3.textContent;
    clonable__curriculumItem__duration.textContent = srcH3.nextElementSibling.textContent;




    clonable__curriculumItemWaiter.appendChild(clonable__curriculumItem);
});

let all__curriculumItem = curriculum__section.querySelectorAll('.l-component-faq_item');
all__curriculumItem[0].remove();


let all__faqItem__richText = curriculum__section.querySelectorAll('.l-component-wyw-get_rich-text-2');

curriculumSrc__allH3.forEach((srcH3,srcH3Id) => {
    let curriculumParser = srcH3.nextElementSibling.nextElementSibling;
    while (curriculumParser.tagName != 'H3') {

        all__faqItem__richText[srcH3Id].appendChild(curriculumParser.cloneNode(true));

        curriculumParser = curriculumParser.nextElementSibling;
        if (curriculumParser == null) {
            break;
        }
    }

});