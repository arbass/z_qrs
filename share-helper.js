let allShareElements = document.querySelectorAll('[share-helper="el"]');

allShareElements.forEach(shareElement => {
    let currentLink;
    if (shareElement.previousElementSibling.tagName === 'A') {
        currentLink = shareElement.previousElementSibling.href;
        let currentFinSweetElements = shareElement.querySelectorAll('[fs-socialshare-element="url"]');
        currentFinSweetElements.forEach(sweetEl => {
            sweetEl.textContent = currentLink;
        });
        shareElement.classList.remove('hide');
    } else {
        console.log('😡😡😡 the structure of elements for automatic link detection is broken');
    }
});