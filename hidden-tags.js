//⭐️ Точка входа
let ht__allMutatuinClw = document.querySelectorAll('[ht-mutation-observer="clw"]');
let ht__allMutatuinClwCounter = 0;
let ht__finsweetNestStatus = false;
let ht__finsweetNestStatusTimer;
let ht__observersList = new Array();

//––––––––––––––––––––––––––––––––––––––
let k = 'ht__observer';
let i = 0;
for(i = 0; i < ht__allMutatuinClw.length; i++) {
    let ht__target = ht__allMutatuinClw[i];
    const ht__config = {
        attributes: true,
        childList: true,
        subtree: true
    };
    eval('var ' + k + i + '= new MutationObserver(ht__finsweetNestStatusChecking);');
    eval('ht__observer' + i + '.observe(ht__target, ht__config);');
    ht__observersList.push(eval('ht__observer' + i));
}


function ht__finsweetNestStatusChecking () {
    
}
