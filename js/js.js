

var functions = {};

functions.start = function() {
	functions.renderGrid();
	functions.renderBoto();
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
	//console.log(this)
	var boto = this;
	var direction = content.direction;
	var position = boto.getBoundingClientRect();
	var x = position.left;
	var y = position.top;
	// So what is the best way to move this. First, get it's current position, and then I can either remove it and add it to something new, but there is perhaps a better way to be doing this. I.e. I can kind of transition the x and y coordinates of this, perhaps in a manner which is similar to the paint program. I think changing the x and y coordinates of it may be a kind of good thing. So if there is a way to get this from the js, then this would be pretty good and then I could manipulate this. 
	if (direction == 'north') {
		boto.style.top = y + 100 + 'px';
	}else if (direction == 'east'){
		boto.style.left = x + 100 +'px';
	} else if (direction == 'south'){
		boto.style.top = y - 100 + 'px'; 
	} else {
		boto.style.left = x - 100 + 'px';
	}
}

content = {};
content.direction = 'north';


functions.start();
