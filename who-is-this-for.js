let witf__section = document.querySelector('[cpage-section="who-is-this-for"]');
let witf__src = witf__section.querySelector('.text-rich-text.is-src');

let witf__headline = witf__section.querySelector('.text-rich-text h2');
let witf__subline = witf__section.querySelector('.text-rich-text h3');
let witf__section__headline = witf__section.querySelector('.l-component-who-is-this-for_header h2');
let witf__section__subline = witf__section__headline.nextElementSibling;

witf__section__headline.textContent = witf__headline.textContent;
witf__section__subline.textContent = witf__subline.textContent;