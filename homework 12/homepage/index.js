const form = document.querySelector('form');

form.addEventListener('submit', (e)=> {
	e.preventDefault();
	const form = e.target;
	const episode = form.elements['episode'].value;

	window.location.href = `../characters-page/index.html?episode=${episode}`;
})

const nextButton = document.getElementById("next");
nextButton.addEventListener('click', () => {
	window.location = '../planets/index.html'
})