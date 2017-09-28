var button = document.querySelector('#btn');
var overlay = document.querySelector('#overlay');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');

function openModal() {
	console.log('open sesame');
	modal.style.display = 'block';
	overlay.style.display = 'block';
}

button.addEventListener('click', openModal);

function closeModal() {
	console.log('sesame close');
	modal.style.display = 'none';
	overlay.style.display = 'none';
}

close.addEventListener('click', closeModal);