// index.js
// Import the .scss-file, to add it to the webpack dependency graph!
// Let a webpack loader handle transforming and bundling the SASS code.
import './styles/index.scss'

// 1. Import the images to add them to the dependency graph
import iconRefresh from './images/01-refresh.png'
import iconLoopback from './images/03-loopback.png'
import iconShuffle from './images/05-shuffle.png'
import logoAngular from './images/angular-logo.png'
import logoJs from './images/logo-js.png'
import logoVue from './images/logo-vue.png'
import natureImg from './images/nature.jpg'

// 2. Assign images to HTML-elements
document.getElementById('icon-refresh').src = iconRefresh;
document.getElementById('icon-loopback').src = iconLoopback;
document.getElementById('icon-shuffle').src=iconShuffle;

document.getElementById('logo-vue').src = logoVue;
document.getElementById('logo-angular').src = logoAngular; // skipped! > 8k limit
document.getElementById('logo-js').src = logoJs; // skipped! > 8k limit

document.getElementById('img-nature').src = natureImg;

// Simple list with number 1-10
const list = document.querySelector('#listOutput');
for (let i = 1; i <= 10; i++) {
    list.innerHTML += `<li>${i}</li>`;
}


