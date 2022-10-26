let ak__allTopicSrc = document.querySelectorAll('[data-ak-topic-tag]');

ak__allTopicSrc.forEach(ak__allTopicSrc__item => {
    let cli = ak__allTopicSrc__item.parentElement.parentElement;
    let currentListOfTags = ak__allTopicSrc__item.getAttribute('data-ak-topic-tag').split(',');
    let currentTopicWaiter = cli.querySelector('[ak-topic-tag="waiter"]');
    if (currentListOfTags != '') {
        currentListOfTags.forEach(tagFromList => {
            let clonableTag = document.querySelector('[ak-topic-tag="element"]').cloneNode(true);
            clonableTag.textContent = tagFromList;
            clonableTag.classList.remove('hide');
            currentTopicWaiter.append(clonableTag);
        });
    }
});