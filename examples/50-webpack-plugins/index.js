// index.js
// Now import the .scss-file, to add it to the webpack dependency graph!
// Let a webpack loader handle transforming and bundling the SASS code.
import './styles/index.scss'

// Simple list with number 1-10
const list = document.querySelector('#listOutput');
for (let i = 1; i <= 10; i++) {
    list.innerHTML += `<li>${i}</li>`;
}


