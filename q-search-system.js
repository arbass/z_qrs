let ss__trueInput = document.querySelector('[ss_input="true"]');
let ss__allNamesElements = document.querySelectorAll('.form_search-nav-cl-i_name');
let ss__allNames = new Array();

ss__allNamesElements.forEach(ss__name => {
    ss__allNames.push(ss__name.textContent);
});


ss__trueInput.addEventListener('keydown', function() {
    ss__inputJob();
});


ss__trueInput.addEventListener('keyup', function() {
    ss__inputJob();
});


ss__trueInput.addEventListener('change', function() {
    ss__inputJob();
});

function ss__inputJob () {
    keyword = ss__trueInput.value.toLowerCase();
    filtered_ss__allNames = ss__allNames.filter(function(name){
          name = name.toLowerCase();
         return name.indexOf(keyword) > -1; 
    });
  
    console.log(filtered_ss__allNames);
}
