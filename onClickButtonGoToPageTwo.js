const remote = require('electron').remote
const app = remote.require('./app.js');

const addButtonToGoToPageTwo = () => {
	const button = document.createElement('button');
	button.textContent = "Open Window with js code"

	button.addEventListener('click', () => {
  	app.openWindow('pageTwo')
	}, false);

	document.body.appendChild(button);
}

addButtonToGoToPageTwo();