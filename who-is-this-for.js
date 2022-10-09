let witf__section = document.querySelector('[cpage-section="who-is-this-for"]');
let witf__src = witf__section.querySelector('.text-rich-text.is-src');

let witf__headline = witf__section.querySelector('.text-rich-text h2');
let witf__subline = witf__section.querySelector('.text-rich-text h3');
let witf__section__headline = witf__section.querySelector('.l-component-who-is-this-for_header h2');
let witf__section__subline = witf__section__headline.nextElementSibling;

witf__section__headline.textContent = witf__headline.textContent;
witf__section__subline.textContent = witf__subline.textContent;

let witf__src__images = witf__src.querySelectorAll('img');
let witf__src__images__srcList = new Array();


let witf__src__figcaprions = witf__src.querySelectorAll('figcaption');
let witf__src__figcaprions_1 = new Array();
let witf__src__figcaprions_2 = new Array();

witf__src__figcaprions.forEach(figcaption => {
    let currentSplitterCaption = figcaption.textContent.split('/');
    let currentSplitterCaption_1 = currentSplitterCaption[0];
    witf__src__figcaprions_1.push(currentSplitterCaption_1);
    let currentSplitterCaption_2 = currentSplitterCaption[1];
    witf__src__figcaprions_2.push(currentSplitterCaption_2);
});

let witf__waiter = witf__section.querySelector('.l-component-who-is-this-for_grid');


witf__src__images.forEach(image => {
    let currentUlr = image.getAttribute('src');
    witf__src__images__srcList.push(currentUlr);
});

witf__src__images.forEach((image, imageId) => {
    if (imageId != '0') {
        let witf__clonableItem = witf__section.querySelector('.l-component-who-is-this-for_item').cloneNode(true);
        witf__waiter.appendChild(witf__clonableItem);
    }
});

let witf__items = witf__section.querySelectorAll('.l-component-who-is-this-for_item');

witf__items.forEach((witf__item, witf__itemId) => {
    let currentImage = witf__item.querySelector('img');
    let currentHeadline = witf__item.querySelector('.is-l-component-who-is-this-for_item');
    let currentSubline = currentHeadline.nextElementSibling;

    currentImage.setAttribute('src', witf__src__images__srcList[witf__itemId]);
    currentHeadline.textContent = witf__src__figcaprions_1[witf__itemId];
    currentSubline.textContent = witf__src__figcaprions_2[witf__itemId];
});