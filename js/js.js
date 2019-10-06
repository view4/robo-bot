

var functions = {};

functions.start = function() {
	functions.renderGrid();
	functions.renderBoto();
	functions.enableCompass();
};

functions.renderGrid = function() {
	var i = 25;
	var container = document.getElementById('table-container');

	while (i > 0){
			var cell = document.createElement('div');
			cell.classList.add('cell');
			container.appendChild(cell);
			i--;
	};
};

functions.renderBoto = function() {

	var table = document.getElementById('table-container');

	var boto = document.createElement('div');
	boto.classList.add('boto');
	table.appendChild(boto);
	boto.style.left = '220px'
	boto.style.top = '220px'
	
	boto.addEventListener('click', functions.moveBoto);
}

functions.moveBoto = function() {

	var boto = this;
	var direction = content.direction;
	var position = boto.getBoundingClientRect();
	var x = parseInt(boto.style.left);
	var y = parseInt(boto.style.top);
	if (direction == 'north') {
		boto.style.top = y - 100 + 'px';
	}else if (direction == 'east'){
		boto.style.left = x + 100 +'px';
	} else if (direction == 'south'){
		boto.style.top = y + 100 + 'px'; 
	} else {
		boto.style.left = x - 100 + 'px';
	}
}

content = {};
content.direction = 'north';

functions.enableCompass = function() {
	var directions = document.getElementsByClassName('dir');
	for (var i = 0; i < directions.length; i++) {
		directions[i].addEventListener('click', functions.changeDirection)
	}

}

functions.changeDirection = function() {
	content.direction = this.id;
	var activeDirection = document.getElementsByClassName('active')[0];
	console.log(activeDirection);
	activeDirection.className = 'dir'
	this.classList.add('active');
}
functions.start();


/* 
To do: 

- add images
	- fear the L-rd
	- connect with meaning. 
	- do not make a graven image -> it does not have to be perfect. 
	- care for others. 
- transform images on direction change 
	- fear the L-rd
	- speak of them
	- woorship Him. 
- limit the boto to only within the grid. 
	- connect with meaning
	- do not murder
	- cleave to Him
- review and improve:
	- eat be sated, 
	do not eat the sinew of the thigh 
	- i am the L-rd
	- add fringes to the corner of your garments. 

- I can submit the application before making any final changes

*/
