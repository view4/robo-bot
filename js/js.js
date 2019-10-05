

var functions = {};

functions.start = function () {
	functions.renderGrid();
};

functions.renderGrid = function () {
	var i = 25;
console.log('robobot')
	var container = document.getElementById('table-container');
	while (i > 0){
			var cell = document.createElement('div');
			cell.classList.add('cell');
			container.appendChild(cell);
			i--;
	};
};

functions.start();
