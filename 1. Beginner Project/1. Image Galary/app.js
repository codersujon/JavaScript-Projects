/*
ES6:
=====================================================================================================
uses an arrow function:

const [current, images] = [document.querySelector('#current'), document.querySelectorAll('.images img')];
images.forEach(img => img.addEventListener('click', e => (current.src = e.target.src)));

*/

//Vanila JS
const current = document.querySelector('#current');
const images = document.querySelectorAll('.images img');

images.forEach(function(img){ //ForEach Loop
	img.addEventListener('click', function(e){
		current.src = e.target.src;
	})
});

