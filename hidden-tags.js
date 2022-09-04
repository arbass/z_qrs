//⭐️ Точка входа
let ht__listMutationStartedElements = document.querySelectorAll('[ht-mutation-observer="clw"]');
let ht__listStartedObservers = new Array();
let ht__timerFinsweetNestStatus;

//––––––––––––––––––––––––––––––––––––––
let k = 'ht__observer';
let i = 0;
for(i = 0; i < ht__listMutationStartedElements.length; i++) {
    let ht__target = ht__listMutationStartedElements[i];
    const ht__config = {
        attributes: true,
        childList: true,
        subtree: true
    };
    eval('var ' + k + i + '= new MutationObserver(ht__finsweetNestStatusChecking);');
    eval('ht__observer' + i + '.observe(ht__target, ht__config);');
    ht__listStartedObservers.push(eval('ht__observer' + i));
}


function ht__finsweetNestStatusChecking () {
    console.log('мутации идут');
    clearTimeout(ht__timerFinsweetNestStatus);
    ht__timerFinsweetNestStatus = setTimeout(function() {
        ht__listStartedObservers.forEach(observer => {
            observer.disconnect();
        });  
        console.log('мутации закончились ⭐️⭐️⭐️ можно запускать основную функцию');
    }, 50);
}    