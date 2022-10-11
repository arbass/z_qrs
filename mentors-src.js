const mw__allElements = document.querySelectorAll('[mentor-element]');
const mw__allClonableWrappers = document.querySelectorAll('[clonable-wrapper]');

mw__allElements.forEach(mw__element => {
    let currentList = mw__element.querySelector('[data-mentor-slugs-list]').getAttribute('data-mentor-slugs-list').split(',');
    if (currentList.length == 1 && currentList[0] != '') {
        mw__allClonableWrappers.forEach(mw__clonableWrapper => {
            let currentSlug = mw__clonableWrapper.querySelector('[data-mentor-slug]').getAttribute('data-mentor-slug');
            let currentWaiter = mw__element.querySelector('[mentor-div-waiter]');
            if (currentList.includes(currentSlug)) {
                let currentClonableElement = mw__clonableWrapper.querySelector('[mentor-element-clonable="single"]').cloneNode(true);
                currentWaiter.append(currentClonableElement);
            }
        });
    }

    if (currentList.length > 1) {
        mw__allClonableWrappers.forEach(mw__clonableWrapper => {
            let currentSlug = mw__clonableWrapper.querySelector('[data-mentor-slug]').getAttribute('data-mentor-slug');
            let currentWaiter = mw__element.querySelector('[mentor-div-waiter]');
            if (currentList.includes(currentSlug)) {
                let currentClonableElement = mw__clonableWrapper.querySelector('[mentor-element-clonable="multiple"]').cloneNode(true);
                currentWaiter.append(currentClonableElement);
            }
        });
    }
});