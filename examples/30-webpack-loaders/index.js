// index.js
// Now import the bundled .css-file, to add it to the webpack dependency graph!
import './styles/index.css'

// Simple list with number 1-10
const list = document.querySelector('#listOutput');
for (let i = 1; i <= 10; i++) {
    list.innerHTML += `<li>${i}</li>`;
}


