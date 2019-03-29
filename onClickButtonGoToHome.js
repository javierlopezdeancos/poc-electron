const remote = require('electron').remote
const app = remote.require('./app.js');

const addButtonToGoToHome = () => {
	const button = document.createElement('button');
	button.textContent = "Go to home";

	button.addEventListener('click', () => {
		app.openWindow('index')
	}, false);

	document.body.appendChild(button);
}

addButtonToGoToHome();