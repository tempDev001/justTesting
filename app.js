const h1 = document.querySelector('.h1');
const myL = document.querySelector('li:nth-of-type(3)');

h1.addEventListener('click', event => {
	console.log(event.target.textContent);
	h1.textContent = 'I don switch am';
	myL.style.cssText = 'background-color: yellow; padding: 1rem; font-weight: bold; border-radius: 2rem';
	
	myL.addEventListener('click', printSom, {
		once: true
	});
});

const printSom = event => {
	console.log(event.target.textContent);
}