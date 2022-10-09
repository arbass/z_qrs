let emoji__section = document.querySelector('[cpage-section="emoji"]');
let emoji__src = emoji__section.querySelector('.text-rich-text.is-src');

let emoji__textElements = emoji__section.querySelectorAll('.l-component-emojy-h_circle-colored-emoji');
let emoji__srcEmoji__h6 = emoji__src.querySelector('h6');
let emoji__srcEmoji__list = emoji__srcEmoji__h6.textContent.split(',');

emoji__textElements.forEach((emoji__textElement, emoji__textElementId) => {
    emoji__textElement.textContent = emoji__srcEmoji__list[emoji__textElementId]; 
});

let emoji__textElement__headline = emoji__section.querySelector('.is-component-emojy-h');
let emoji__src__headline = emoji__src.querySelector('h2');

emoji__textElement__headline.textContent = emoji__src__headline.textContent;

let emoji__card__headline = emoji__section.querySelectorAll('.is-l-component-emojy-h_bullet-item');
let emoji__cardSrc__headline = emoji__src.querySelectorAll('h3');

let emoji__card__subline = emoji__section.querySelectorAll('.l-component-emojy-h_bullet-item-text');
let emoji__cardSrc__subline = emoji__src.querySelectorAll('h4');

emoji__card__headline.forEach((headline, headlineId)  => {
    headline.textContent = emoji__cardSrc__headline[headlineId].textContent;
});

emoji__card__subline.forEach((subline, sublineId) => {
    subline.textContent = emoji__cardSrc__subline[sublineId].textContent;
});