

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
	boto.style.left = '232px'
	boto.style.top = '232px'
	
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
content.direction = 'east';

functions.enableCompass = function() {
	var directions = document.getElementsByClassName('dir');
	for (var i = 0; i < directions.length; i++) {
		directions[i].addEventListener('click', functions.changeDirection)
	}

}

functions.changeDirection = function() {
	if (this.innerText == 'N') {
		content.direction = 'north'; 
	} else if (this.innerText == 'E') {
		content.direction = 'east';
	} else if (this.innerText == 'S'){
		content.direction = 'south';	
	} else {
		content.direction = 'west';
	}
}
functions.start();
