const h1 = document.querySelector('.h1');

h1.addEventListener('click', event => {
	console.log(event.target.textContent);
	h1.textContent = 'I don switch am';
});