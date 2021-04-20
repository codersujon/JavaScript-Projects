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

//Default Opacity
const opacity = .4;
//Set First Image Opacity
images[0].style.opacity = opacity;


images.forEach(function(img){ //ForEach Loop
	img.addEventListener('click', function(e){
		
		//Reset Opacity to 1
		images.forEach(img => (img.style.opacity = 1));
		
		//Current Image src change
		current.src = e.target.src;
		
		//Change Current Opacity
		e.target.style.opacity = opacity;
		
		//Add Fade in Class
		current.classList.add('fade-in');
		//Remvoe Fade in Class

		setTimeOut(function(){
			current.classList.remove('fade-in');
		}, 500);

	});
});
