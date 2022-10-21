let faq__section = document.querySelector('[cpage-section="faq"]');
let faq__src = faq__section.querySelector('.text-rich-text.is-src');
let faq__srcH3 = faq__src.querySelectorAll('h3');
let faq__srcH4 = faq__src.querySelectorAll('h4');

faq__section.querySelector('.l-component-faq_col-1 h2').textContent = faq__src.querySelector('h2').textContent;

let faqWaiter = faq__section.querySelector('.l-component-faq_col-2');

faq__srcH3.forEach((srcH3, id__srcH3) => {
    let src__currentQuestion = srcH3.textContent;
    let src__currentAnswer = faq__srcH4[id__srcH3].textContent;

    clonable__faqItem = faq__section.querySelector('.l-component-faq_item').cloneNode(true);
    let currentQuestion = clonable__faqItem.querySelector('.l-component-faq_item-q-text');
    currentQuestion.textContent = src__currentQuestion;
    let currentAnswer = clonable__faqItem.querySelector('.l-component-faq_item-a p');
    currentAnswer.textContent = src__currentAnswer;

    faqWaiter.appendChild(clonable__faqItem);
});

all__faqItem = faq__section.querySelectorAll('.l-component-faq_item');
all__faqItem[0].remove();