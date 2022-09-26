let wywSection = document.querySelector('[cpage-section="wyw-learn"]');
let currentSrc = wywSection.querySelector('.text-rich-text.is-src');

wywSection.querySelector('.l-component-wyw-learn_col-1-title').textContent = currentSrc.querySelector('h2').textContent;
wywSection.querySelector('.l-component-wyw-learn_col-1-title').nextSibling.textContent = currentSrc.querySelector('h2').nextSibling.textContent;

let src__allH3 = currentSrc.querySelectorAll('h3');
let el__allH3 = wywSection.querySelectorAll('.l-component-wyw-learn_col-2-h3-h4');

el__allH3.forEach((el__H3,el__H3Id) => {
    el__H3.textContent = src__allH3[el__H3Id].textContent;
});

let src__parser = src__allH3[0].nextElementSibling;

let keys__richText = wywSection.querySelector('.l-component-wyw-learn_col-2-takeways-rich');
let keys__richTextChilds = keys__richText.querySelectorAll('*');
keys__richTextChilds.forEach(child => {
    child.remove();
});


while (src__parser.tagName !== 'H3') {
    clonable_src__parser = src__parser.cloneNode(true);
    keys__richText.append(clonable_src__parser);
    src__parser = src__parser.nextElementSibling;
}

src__parser = src__allH3[1].nextElementSibling;
let skillsWaiter = wywSection.querySelector('.l-component-wyw-learn_skills-wrapper');

while (src__parser.tagName !== 'H3') {
    let src__currentIco = src__parser.querySelector('img').src;
    let src__currentHeadline = src__parser.querySelector('figcaption').textContent.split('/')[0];
    let src__currentSubline = src__parser.querySelector('figcaption').textContent.split('/')[1];

    let clonable__skill = wywSection.querySelector('.l-component-wyw-learn_skills-item').cloneNode(true);

    let el__currentIco = clonable__skill.querySelector('img');
    el__currentIco.src = src__currentIco;

    let el__currentHeadline = clonable__skill.querySelector('h4');
    el__currentHeadline.textContent = src__currentHeadline;

    let el__currentSubline = clonable__skill.querySelector('p');
    el__currentSubline.textContent = src__currentSubline;

    skillsWaiter.append(clonable__skill);

    src__parser = src__parser.nextElementSibling;
}

let clonable__skillZero = wywSection.querySelectorAll('.l-component-wyw-learn_skills-item')[0];
clonable__skillZero.remove();

src__parser = src__allH3[2].nextElementSibling;
let toolsWaiter = wywSection.querySelector('.l-component-wyw-learn_col-2-tools-grid');
while (src__parser) {
    let src__currentIco = src__parser.querySelector('img').src;
    let clonable__tool = wywSection.querySelector('.l-component-wyw-learn_col-2-tools-logo-wrapper').cloneNode(true);
    let clonable__toolImg = clonable__tool.querySelector('img');
    clonable__toolImg.src = src__currentIco;

    toolsWaiter.append(clonable__tool);

    src__parser = src__parser.nextElementSibling;
}

let clonable__toolZero = wywSection.querySelectorAll('.l-component-wyw-learn_col-2-tools-logo-wrapper')[0];
clonable__toolZero.remove();