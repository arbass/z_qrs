let cta__section = document.querySelector('[cpage-section="cta"]');
let cta__src = cta__section.querySelector('.text-rich-text.is-src');
let cta__headline = cta__section.querySelector('.is-cta_headline');
let cta__subline = cta__section.querySelector('.cta_subline');

let cta__headline_src = cta__section.querySelector('h2');
let cta__subline_src = cta__section.querySelector('h3');

cta__headline.textContent = cta__headline_src.textContent;
cta__subline.textContent = cta__subline_src.textContent;