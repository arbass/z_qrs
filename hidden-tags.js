//⭐️ Точка входа
let ht__listOfTagsWrapper = document.querySelectorAll('[hidden-tags-counter="tags-wrapper"]');
let ht__entryPointCounter = 0;
let ht__entryPointCounterTimer;

function ht__finsweetNestStatusChecker() {
    ht__listOfTagsWrapper.forEach(ht__tagWrapper => {
        let ht__currentTagsClw = ht__tagWrapper.querySelector('[hidden-tags-counter="clonable-clw"]');
        if (ht__currentTagsClw == null) {
            clearTimeout(ht__entryPointCounterTimer);
            ht__entryPointCounterTimer = setTimeout(ht__finsweetNestStatusChecker, 100);
        } else {
            while (ht__entryPointCounter < ht__listOfTagsWrapper.length) {
                ht__entryPointCounter++;
            }
        }
    });
    if (ht__entryPointCounter == ht__listOfTagsWrapper.length) {
        console.log(ht__entryPointCounter + ' == ' + ht__listOfTagsWrapper.length);
    }
}

ht__finsweetNestStatusChecker();
