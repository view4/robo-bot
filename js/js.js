

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
	var x = parseInt(boto.style.left);
	var y = parseInt(boto.style.top);

	if (direction == 'north') {
		y -= 100;
	}else if (direction == 'east'){
		x += 100;
	} else if (direction == 'south'){
		y += 100; 
	} else {
		x -= 100;
	}

	if(y < 0 || y > 500 || x < 0 || x > 500){
		return 
	} else {
		boto.style.top = y + 'px';
		boto.style.left = x+ 'px'
	}
}

content = {};
content.direction = 'south';

functions.enableCompass = function() {
	var directions = document.getElementsByClassName('dir');
	for (var i = 0; i < directions.length; i++) {
		directions[i].addEventListener('click', functions.changeDirection);
	};
}

functions.changeDirection = function() {
	content.direction = this.id;
	var activeDirection = document.getElementsByClassName('active')[0];
	activeDirection.className = 'dir';
	this.classList.add('active');
	
	functions.changeBotoRotation();
}

functions.changeBotoRotation = function() {
	var direction = content.direction;
	var boto = document.getElementsByClassName('boto')[0];

	if (direction == 'north') {
		boto.style.transform = 'rotate(180deg)';
	}else if (direction == 'east'){
		boto.style.transform = 'rotate(270deg)';
	} else if (direction == 'south'){
		boto.style.transform = 'rotate(0deg)';
	} else {
		boto.style.transform = 'rotate(90deg)';
	}

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
