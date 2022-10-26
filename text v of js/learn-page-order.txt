const currentSectionsOrder = document.querySelector('[data-order-list-trick]').getAttribute('data-order-list-trick').split(',');

currentSectionsOrder.forEach((currentSectionsOrder__item,currentSectionsOrder__itemId) => {
    let currentSection = document.querySelector(`[${currentSectionsOrder__item}]`);
    currentSection.style.order = currentSectionsOrder__itemId;
});