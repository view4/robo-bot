var content = {};
content.direction = 'south';

var functions = {};

functions.start = function() {
	functions.renderGrid();
	functions.renderBoto();
	functions.enableCompass();

	//event listener to icons
	document.getElementsByClassName('mini-compass')[0].addEventListener('click', functions.displayCompass)
	document.getElementsByClassName('mini-avatar')[0].addEventListener('click', functions.displayAvatars)
	// event listeners to avatars
	var avatars = document.getElementsByClassName('avatar');
	for(var i = 0; i < avatars.length; i++){
		avatars[i].addEventListener('click', functions.changeAvatar)
	};
};

functions.renderGrid = function() {
	var i = 25;
	var container = document.getElementById('table-container');

	while (i > 0) {
			var cell = document.createElement('div');
			cell.classList.add('cell');
			container.appendChild(cell);
			i--;
	};
};

functions.renderBoto = function() {
	var table = document.getElementById('table-container');
	var botoContainer = document.createElement('div');
	var boto = document.createElement('img');
	boto.src = './images/robo-originale.png';
	botoContainer.classList.add('boto');
	botoContainer.appendChild(boto)
	table.appendChild(botoContainer);
	botoContainer.style.left = '194px'
	botoContainer.style.top = '194px'
	
	botoContainer.addEventListener('click', functions.moveBoto);
}

functions.moveBoto = function() {
	var boto = this;
	var direction = content.direction;
	var x = parseInt(boto.style.left);
	var y = parseInt(boto.style.top);
	console.log('walla')

	if (direction == 'north') {
		y -= 90;
	}else if (direction == 'east'){
		x += 90;
	} else if (direction == 'south'){
		y += 90; 
	} else {
		x -= 90;
	}

	if(y < 0 || y > 500 || x < 0 || x > 500){
		return 
	} else {
		boto.style.top = y + 'px';
		boto.style.left = x+ 'px'
	}
}

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


functions.displayCompass = function() {
	console.log('hey')
	document.getElementById('compass').style.display='block';
}
functions.displayAvatars = function() {
	document.getElementsByClassName('avatars')[0].style.display='flex';
}

functions.changeAvatar = function(event) {
	var newAvatar = event.target.classList[1];
	var boto = document.getElementsByClassName('boto')[0].firstChild;
	console.log(newAvatar)
	var suffix = newAvatar == 'red' ? '.jpeg': '.png';
	console.log(suffix);
	console.log(boto);
	boto.src = `./images/robo-${newAvatar + suffix}`;

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

/* 
I think there are a few things which could be improved here, but none of this is functional things it is more about the user experience side of things to be honest. 

I think transitions, if I can add transitions to boto's movements then I think that this ould add more feeling and a better vibe to what he is doing, I think it would be good and make it less machine like or something. 

The design aspect of this, and I am not sure what exactly could be improved, I think it is perhaps lacking a few things, I do not know if it should be centered or not, but I think generally bringing some kind of eeling through this could be a good thing and I am worried about this because I feel it is not my forte. 

I think this is a cool thing and it is something I would probably put on my portfolio in a kind of sense, it is not as big as some of the other projects but still something which I am kind of proud of . 

I think the code is neat and I think the logic makes sense and so this is something which I am kind of proud of in honesty.

Okay design wise I think I added some good things, I think transitions would help a little bit, but even without this it is not so bad at the moment, I think I want to center the device, it bothers me a bit that it does not fit onto one screen but it is okay, I think it was kind of cool for me to have added the ipad kind of thing to this, but it took a little while for me to have done. 

I think the compass should perhaps be overlapping into the table container, I think there should be like a small arrow or something which indicates it should be clicked on and then it should appear somewhere and I think that this can be done in a few ways, there could be like a whole load of features which I could add to this. Speech from the robot? 
A help thing? 

A loading page ? 

Turn the ipad off? 
etc .. etc ...

*/
