let wywGet__section = document.querySelector('[cpage-section="wyw-get"]');
let wywGet__src = wywGet__section.querySelector('.text-rich-text.is-src');
let wywGet__srcFigures = wywGet__src.querySelectorAll('figure');

wywGet__section.querySelector('.l-component-wyw-get_header h3').textContent = wywGet__src.querySelector('h3').textContent;

let wywGet__waiter = wywGet__section.querySelector('.l-component-wyw-get_wrapper');

wywGet__srcFigures.forEach((figure, figureId) => {
    let src__currentIcon = figure.querySelector('img').src;
    let src__currentText = figure.querySelector('figcaption').textContent;

    let clonable__wywItem = wywGet__section.querySelector('.l-component-wyw-get_item').cloneNode(true);

    let wywItem__icon = clonable__wywItem.querySelector('.l-component-wyw-get_item-ico');
    wywItem__icon.src = src__currentIcon;

    let wywItem__text = clonable__wywItem.querySelector('p');
    wywItem__text.textContent = src__currentText;

    wywGet__waiter.appendChild(clonable__wywItem);
});

let all__wywItem = wywGet__section.querySelectorAll('.l-component-wyw-get_item');
all__wywItem[0].remove();