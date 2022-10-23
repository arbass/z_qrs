let allShareElements = document.querySelectorAll('[share-helper="thread"]');

allShareElements.forEach(shareElement => {
    let currentLinksWrapper = shareElement.querySelector('[share-helper="links-wrapper"]');
    let currentCardLink = shareElement.previousElementSibling;
    let currentExternalLink = currentLinksWrapper.querySelector('[share-helper="external"]');
    let currentIternalLink = currentLinksWrapper.querySelector('[share-helper="iternal"]');

    if (currentExternalLink.getAttribute('href') != '#') {
        currentCardLink.setAttribute('href', currentExternalLink.getAttribute('href'));
        currentCardLink.setAttribute('target', '_blank');
    } else {
        let partOfUrl__1 = window.location.origin;
        let partOfUrl__2 = currentIternalLink.getAttribute('href');

        currentCardLink.setAttribute('href', partOfUrl__1 + partOfUrl__2);
    }
    //теперь нужно установить ссылку для всех share-кнопок
    let currentShareButtons = shareElement.querySelectorAll('[fs-socialshare-element="url"]');
    currentShareButtons.forEach(shareButton => {
        shareButton.textContent = currentCardLink.getAttribute('href');
    });
});