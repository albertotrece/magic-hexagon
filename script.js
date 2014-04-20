window.onload = initState();
startAutoZoom(1240, 750, 'fixed');

function customAutoZoom() {
	autoZoom(1240, 750, 'fixed');
}

function strToFunction(string) {
	script = document.createElement('script');
	document.head.appendChild(script);
	script.innerHTML = string;
	window.setTimeout(function() {
		script.remove();
	}, 0);
}

function random(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

function updateColor(letter, num) {
	currentColor = document.getElementsByClassName(letter)[0].getAttribute('data-color');
	document.getElementsByClassName(letter)[num].setAttribute('data-color', currentColor);
}

function unsetNums() {
	document.getElementById('number0').setAttribute('class', 'number');
	document.getElementById('number1').setAttribute('class', 'number');
	document.getElementById('number2').setAttribute('class', 'number');
	document.getElementById('number3').setAttribute('class', 'number');
	document.getElementById('number4').setAttribute('class', 'number');
	document.getElementById('number5').setAttribute('class', 'number');
	document.getElementById('number6').setAttribute('class', 'number');
}

function init() {
	score = -1;
	
	document.getElementById('number0').removeAttribute('style');
	document.getElementById('number0').setAttribute('data-rotate', '0');
	document.getElementById('number1').removeAttribute('style');
	document.getElementById('number1').setAttribute('data-rotate', '0');
	document.getElementById('number2').removeAttribute('style');
	document.getElementById('number2').setAttribute('data-rotate', '0');
	document.getElementById('number3').removeAttribute('style');
	document.getElementById('number3').setAttribute('data-rotate', '0');
	document.getElementById('number4').removeAttribute('style');
	document.getElementById('number4').setAttribute('data-rotate', '0');
	document.getElementById('number5').removeAttribute('style');
	document.getElementById('number5').setAttribute('data-rotate', '0');
	document.getElementById('number6').removeAttribute('style');
	document.getElementById('number6').setAttribute('data-rotate', '0');
	unsetNums();
	
	colors = ['blue', 'red', 'yellow', 'green'];
	elems = [
		document.getElementsByClassName('a')[0], 
		document.getElementsByClassName('b')[0], 
		document.getElementsByClassName('c')[0], 
		document.getElementsByClassName('d')[0], 
		document.getElementsByClassName('e')[0], 
		document.getElementsByClassName('f')[0], 
		document.getElementsByClassName('g')[0], 
		document.getElementsByClassName('h')[0], 
		document.getElementsByClassName('i')[0], 
		document.getElementsByClassName('j')[0], 
		document.getElementsByClassName('k')[0], 
		document.getElementsByClassName('l')[0], 
		document.getElementsByClassName('m')[0], 
		document.getElementsByClassName('n')[0], 
		document.getElementsByClassName('o')[0], 
		document.getElementsByClassName('p')[0], 
		document.getElementsByClassName('q')[0], 
		document.getElementsByClassName('r')[0], 
		document.getElementsByClassName('s')[0], 
		document.getElementsByClassName('t')[0], 
		document.getElementsByClassName('u')[0], 
		document.getElementsByClassName('v')[0], 
		document.getElementsByClassName('w')[0], 
		document.getElementsByClassName('x')[0], 
	];
	
	times = [0, 1, 2, 3, 4, 5];
	
	for(var i = 0; i < times.length; i++) {
		r = random(0, elems.length);
		elems[r].setAttribute('data-color', colors[0]);
		elems.splice(r, 1);
	}
	
	for(var i = 0; i < times.length; i++) {
		r = random(0, elems.length);
		elems[r].setAttribute('data-color', colors[1]);
		elems.splice(r, 1);
	}
	
	for(var i = 0; i < times.length; i++) {
		r = random(0, elems.length);
		elems[r].setAttribute('data-color', colors[2]);
		elems.splice(r, 1);
	}
	
	for(var i = 0; i < times.length; i++) {
		r = random(0, elems.length);
		elems[r].setAttribute('data-color', colors[3]);
		elems.splice(r, 1);
	}
	
	updateColor('s', 1);
	updateColor('s', 2);
	
	updateColor('v', 1);
	updateColor('v', 2);
	
	updateColor('t', 1);
	updateColor('t', 2);
	
	updateColor('u', 1);
	updateColor('u', 2);
	
	updateColor('w', 1);
	updateColor('w', 2);
	
	updateColor('x', 1);
	updateColor('x', 2);
	
	updateColor('n', 1);
	updateColor('o', 1);
	updateColor('p', 1);
	updateColor('q', 1);
	updateColor('r', 1);
	updateColor('m', 1);
	
	testForWin();
	
	if (localStorage.getItem('hiScore') !== null) {
		document.getElementById('hiScore').innerHTML = localStorage.getItem('hiScore');
	}
}

function initState() {
	score = -1;
	
	document.getElementById('number0').removeAttribute('style');
	document.getElementById('number0').setAttribute('data-rotate', '0');
	document.getElementById('number1').removeAttribute('style');
	document.getElementById('number1').setAttribute('data-rotate', '0');
	document.getElementById('number2').removeAttribute('style');
	document.getElementById('number2').setAttribute('data-rotate', '0');
	document.getElementById('number3').removeAttribute('style');
	document.getElementById('number3').setAttribute('data-rotate', '0');
	document.getElementById('number4').removeAttribute('style');
	document.getElementById('number4').setAttribute('data-rotate', '0');
	document.getElementById('number5').removeAttribute('style');
	document.getElementById('number5').setAttribute('data-rotate', '0');
	document.getElementById('number6').removeAttribute('style');
	document.getElementById('number6').setAttribute('data-rotate', '0');
	
	colors = ['blue', 'red', 'yellow', 'green'];
	elems = [
		document.getElementsByClassName('a')[0], 
		document.getElementsByClassName('b')[0], 
		document.getElementsByClassName('c')[0], 
		document.getElementsByClassName('d')[0], 
		document.getElementsByClassName('e')[0], 
		document.getElementsByClassName('f')[0], 
		document.getElementsByClassName('g')[0], 
		document.getElementsByClassName('h')[0], 
		document.getElementsByClassName('i')[0], 
		document.getElementsByClassName('j')[0], 
		document.getElementsByClassName('k')[0], 
		document.getElementsByClassName('l')[0], 
		document.getElementsByClassName('m')[0], 
		document.getElementsByClassName('n')[0], 
		document.getElementsByClassName('o')[0], 
		document.getElementsByClassName('p')[0], 
		document.getElementsByClassName('q')[0], 
		document.getElementsByClassName('r')[0], 
		document.getElementsByClassName('s')[0], 
		document.getElementsByClassName('t')[0], 
		document.getElementsByClassName('u')[0], 
		document.getElementsByClassName('v')[0], 
		document.getElementsByClassName('w')[0], 
		document.getElementsByClassName('x')[0], 
	];
	
	times = [0, 1, 2, 3, 4, 5];
	
	for(var i = 0; i < times.length; i++) {
		r = random(0, elems.length);
		elems[r].setAttribute('data-color', colors[0]);
		elems.splice(r, 1);
	}
	
	for(var i = 0; i < times.length; i++) {
		r = random(0, elems.length);
		elems[r].setAttribute('data-color', colors[1]);
		elems.splice(r, 1);
	}
	
	for(var i = 0; i < times.length; i++) {
		r = random(0, elems.length);
		elems[r].setAttribute('data-color', colors[2]);
		elems.splice(r, 1);
	}
	
	for(var i = 0; i < times.length; i++) {
		r = random(0, elems.length);
		elems[r].setAttribute('data-color', colors[3]);
		elems.splice(r, 1);
	}
	
	updateColor('s', 1);
	updateColor('s', 2);
	
	updateColor('v', 1);
	updateColor('v', 2);
	
	updateColor('t', 1);
	updateColor('t', 2);
	
	updateColor('u', 1);
	updateColor('u', 2);
	
	updateColor('w', 1);
	updateColor('w', 2);
	
	updateColor('x', 1);
	updateColor('x', 2);
	
	updateColor('n', 1);
	updateColor('o', 1);
	updateColor('p', 1);
	updateColor('q', 1);
	updateColor('r', 1);
	updateColor('m', 1);
	
	restoreState();
	
	testForWin();
	
	if (localStorage.getItem('hiScore') !== null) {
		document.getElementById('hiScore').innerHTML = localStorage.getItem('hiScore');
	}
}

function hideMessage() {
	document.getElementById('message').setAttribute('class', 'hidden');
}

function message(text) {
	document.getElementById('message').removeAttribute('class');
	document.getElementById('message').innerHTML = text;
}

function setNum(num) {
	rotateNum = num;
	document.getElementById('rotateLeft').setAttribute('onclick', 'rotateHex' + num + 'Left()');
	document.getElementById('rotateRight').setAttribute('onclick', 'rotateHex' + num + 'Right()');
	unsetNums();
	document.getElementById('number' + num).setAttribute('class', 'number active');
	hideMessage();
}

function rotateNumRight(num) {
	number = document.getElementById('number' + num);
	number.setAttribute('data-rotate', parseInt(number.getAttribute('data-rotate')) + 60);
	number.setAttribute('style', '-webkit-transform: rotateZ(' + number.getAttribute('data-rotate') + 'deg); transform: rotateZ(' + number.getAttribute('data-rotate') + 'deg);');
}

function rotateNumLeft(num) {
	number = document.getElementById('number' + num);
	number.setAttribute('data-rotate', parseInt(number.getAttribute('data-rotate')) - 60);
	number.setAttribute('style', '-webkit-transform: rotateZ(' + number.getAttribute('data-rotate') + 'deg); transform: rotateZ(' + number.getAttribute('data-rotate') + 'deg);');
}

function showFinishedBasic() {
	document.getElementById('hex').setAttribute('class', 'finished');
}

score = 0;

function testForWin() {
	score = score + 1;
	document.getElementById('score').innerHTML = score;
	if (
		document.getElementsByClassName('a')[0].getAttribute('data-color') == 'red' &&
		document.getElementsByClassName('b')[0].getAttribute('data-color') == 'red' &&
		document.getElementsByClassName('c')[0].getAttribute('data-color') == 'yellow' &&
		document.getElementsByClassName('d')[0].getAttribute('data-color') == 'yellow' &&
		document.getElementsByClassName('e')[0].getAttribute('data-color') == 'green' &&
		document.getElementsByClassName('f')[0].getAttribute('data-color') == 'green' &&
		document.getElementsByClassName('g')[0].getAttribute('data-color') == 'red' &&
		document.getElementsByClassName('h')[0].getAttribute('data-color') == 'red' &&
		document.getElementsByClassName('i')[0].getAttribute('data-color') == 'green' &&
		document.getElementsByClassName('j')[0].getAttribute('data-color') == 'green' &&
		document.getElementsByClassName('k')[0].getAttribute('data-color') == 'yellow' &&
		document.getElementsByClassName('l')[0].getAttribute('data-color') == 'yellow' &&
		document.getElementsByClassName('m')[0].getAttribute('data-color') == 'red' &&
		document.getElementsByClassName('n')[0].getAttribute('data-color') == 'red' &&
		document.getElementsByClassName('o')[0].getAttribute('data-color') == 'yellow' &&
		document.getElementsByClassName('p')[0].getAttribute('data-color') == 'yellow' &&
		document.getElementsByClassName('q')[0].getAttribute('data-color') == 'green' &&
		document.getElementsByClassName('r')[0].getAttribute('data-color') == 'green' &&
		document.getElementsByClassName('s')[0].getAttribute('data-color') == 'blue' &&
		document.getElementsByClassName('t')[0].getAttribute('data-color') == 'blue' &&
		document.getElementsByClassName('u')[0].getAttribute('data-color') == 'blue' &&
		document.getElementsByClassName('v')[0].getAttribute('data-color') == 'blue' &&
		document.getElementsByClassName('w')[0].getAttribute('data-color') == 'blue' &&
		document.getElementsByClassName('x')[0].getAttribute('data-color') == 'blue'
	) {
		win();
	} else {
		saveState();
	}
}

function win() {
	message('You win! Score: ' + score + ' (lowest is best). <a onclick="hideMessage();init()">Click to play again</a>, <a onclick="window.open(' + "'" + 'https://twitter.com/intent/tweet?text=My+score+in+%23MagicHexagon+by+%40devilishdb+is+' + score + '%21+%28Lowest+is+best.%29+Play+it+at+http%3A%2F%2Fbit.ly%2FMagicHex' + "'" + ', ' + "'" + 'popupFinished' + "'" + ', ' + "'" + 'toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=600,height=258' + "'" + ')">tweet your score</a> or just play freestyle.');
	deleteState();
	if (localStorage.getItem('hiScore') !== null) {
		if (parseInt(localStorage.getItem('hiScore')) >= score) {
			document.getElementById('hiScore').innerHTML = score;
			localStorage.setItem('hiScore', score);
		}
	} else {
		document.getElementById('hiScore').innerHTML = score;
		localStorage.setItem('hiScore', score);
	}
	window.setTimeout(function() {
		showFinishedBasic();
	}, 100);
}

function rotateHex0Right() {
	sColor = document.querySelector('#no0 .s').getAttribute('data-color');
	vColor = document.querySelector('#no0 .v').getAttribute('data-color');
	tColor = document.querySelector('#no0 .t').getAttribute('data-color');
	uColor = document.querySelector('#no0 .u').getAttribute('data-color');
	wColor = document.querySelector('#no0 .w').getAttribute('data-color');
	xColor = document.querySelector('#no0 .x').getAttribute('data-color');
	
	document.querySelector('#no0 .s').setAttribute('data-color', vColor);
	document.querySelector('#no0 .x').setAttribute('data-color', sColor);
	document.querySelector('#no0 .t').setAttribute('data-color', xColor);
	document.querySelector('#no0 .w').setAttribute('data-color', tColor);
	document.querySelector('#no0 .u').setAttribute('data-color', wColor);
	document.querySelector('#no0 .v').setAttribute('data-color', uColor);
	
	document.querySelector('#no1 .v').setAttribute('data-color', uColor);
	document.querySelector('#no1 .s').setAttribute('data-color', vColor);
	document.querySelector('#no2 .s').setAttribute('data-color', vColor);
	document.querySelector('#no2 .x').setAttribute('data-color', sColor);
	document.querySelector('#no3 .x').setAttribute('data-color', sColor);
	document.querySelector('#no3 .t').setAttribute('data-color', xColor);
	document.querySelector('#no4 .t').setAttribute('data-color', xColor);
	document.querySelector('#no4 .w').setAttribute('data-color', tColor);
	document.querySelector('#no5 .w').setAttribute('data-color', tColor);
	document.querySelector('#no5 .u').setAttribute('data-color', wColor);
	document.querySelector('#no6 .u').setAttribute('data-color', wColor);
	document.querySelector('#no6 .v').setAttribute('data-color', uColor);
	
	rotateNumRight('0');
	
	testForWin();
}

function rotateHex0Left() {
	sColor = document.querySelector('#no0 .s').getAttribute('data-color');
	vColor = document.querySelector('#no0 .v').getAttribute('data-color');
	tColor = document.querySelector('#no0 .t').getAttribute('data-color');
	uColor = document.querySelector('#no0 .u').getAttribute('data-color');
	wColor = document.querySelector('#no0 .w').getAttribute('data-color');
	xColor = document.querySelector('#no0 .x').getAttribute('data-color');
	
	document.querySelector('#no0 .s').setAttribute('data-color', xColor);
	document.querySelector('#no0 .x').setAttribute('data-color', tColor);
	document.querySelector('#no0 .t').setAttribute('data-color', wColor);
	document.querySelector('#no0 .w').setAttribute('data-color', uColor);
	document.querySelector('#no0 .u').setAttribute('data-color', vColor);
	document.querySelector('#no0 .v').setAttribute('data-color', sColor);
	
	document.querySelector('#no1 .v').setAttribute('data-color', sColor);
	document.querySelector('#no1 .s').setAttribute('data-color', xColor);
	document.querySelector('#no2 .s').setAttribute('data-color', xColor);
	document.querySelector('#no2 .x').setAttribute('data-color', tColor);
	document.querySelector('#no3 .x').setAttribute('data-color', tColor);
	document.querySelector('#no3 .t').setAttribute('data-color', wColor);
	document.querySelector('#no4 .t').setAttribute('data-color', wColor);
	document.querySelector('#no4 .w').setAttribute('data-color', uColor);
	document.querySelector('#no5 .w').setAttribute('data-color', uColor);
	document.querySelector('#no5 .u').setAttribute('data-color', vColor);
	document.querySelector('#no6 .u').setAttribute('data-color', vColor);
	document.querySelector('#no6 .v').setAttribute('data-color', sColor);
	
	rotateNumLeft('0');
	
	testForWin();
}

function rotateHex1Right() {
	aColor = document.querySelector('#no1 .a').getAttribute('data-color');
	gColor = document.querySelector('#no1 .g').getAttribute('data-color');
	mColor = document.querySelector('#no1 .m').getAttribute('data-color');
	nColor = document.querySelector('#no1 .n').getAttribute('data-color');
	sColor = document.querySelector('#no1 .s').getAttribute('data-color');
	vColor = document.querySelector('#no1 .v').getAttribute('data-color');
	
	document.querySelector('#no1 .a').setAttribute('data-color', gColor);
	document.querySelector('#no1 .n').setAttribute('data-color', aColor);
	document.querySelector('#no1 .s').setAttribute('data-color', nColor);
	document.querySelector('#no1 .v').setAttribute('data-color', sColor);
	document.querySelector('#no1 .m').setAttribute('data-color', vColor);
	document.querySelector('#no1 .g').setAttribute('data-color', mColor);
	
	document.querySelector('#no0 .v').setAttribute('data-color', sColor);
	document.querySelector('#no0 .s').setAttribute('data-color', nColor);
	document.querySelector('#no2 .s').setAttribute('data-color', nColor);
	document.querySelector('#no2 .n').setAttribute('data-color', aColor);
	document.querySelector('#no6 .v').setAttribute('data-color', sColor);
	document.querySelector('#no6 .m').setAttribute('data-color', vColor);
	
	rotateNumRight('1');
	
	testForWin();
}

function rotateHex1Left() {
	aColor = document.querySelector('#no1 .a').getAttribute('data-color');
	gColor = document.querySelector('#no1 .g').getAttribute('data-color');
	mColor = document.querySelector('#no1 .m').getAttribute('data-color');
	nColor = document.querySelector('#no1 .n').getAttribute('data-color');
	sColor = document.querySelector('#no1 .s').getAttribute('data-color');
	vColor = document.querySelector('#no1 .v').getAttribute('data-color');
	
	document.querySelector('#no1 .a').setAttribute('data-color', nColor);
	document.querySelector('#no1 .n').setAttribute('data-color', sColor);
	document.querySelector('#no1 .s').setAttribute('data-color', vColor);
	document.querySelector('#no1 .v').setAttribute('data-color', mColor);
	document.querySelector('#no1 .m').setAttribute('data-color', gColor);
	document.querySelector('#no1 .g').setAttribute('data-color', aColor);
	
	document.querySelector('#no0 .v').setAttribute('data-color', mColor);
	document.querySelector('#no0 .s').setAttribute('data-color', vColor);
	document.querySelector('#no2 .s').setAttribute('data-color', vColor);
	document.querySelector('#no2 .n').setAttribute('data-color', sColor);
	document.querySelector('#no6 .v').setAttribute('data-color', mColor);
	document.querySelector('#no6 .m').setAttribute('data-color', gColor);
	
	rotateNumLeft('1');
	
	testForWin();
}

function rotateHex2Right() {
	bColor = document.querySelector('#no2 .b').getAttribute('data-color');
	nColor = document.querySelector('#no2 .n').getAttribute('data-color');
	sColor = document.querySelector('#no2 .s').getAttribute('data-color');
	kColor = document.querySelector('#no2 .k').getAttribute('data-color');
	oColor = document.querySelector('#no2 .o').getAttribute('data-color');
	xColor = document.querySelector('#no2 .x').getAttribute('data-color');
	
	document.querySelector('#no2 .b').setAttribute('data-color', nColor);
	document.querySelector('#no2 .n').setAttribute('data-color', sColor);
	document.querySelector('#no2 .s').setAttribute('data-color', xColor);
	document.querySelector('#no2 .k').setAttribute('data-color', bColor);
	document.querySelector('#no2 .o').setAttribute('data-color', kColor);
	document.querySelector('#no2 .x').setAttribute('data-color', oColor);
	
	document.querySelector('#no0 .s').setAttribute('data-color', xColor);
	document.querySelector('#no0 .x').setAttribute('data-color', oColor);
	document.querySelector('#no1 .s').setAttribute('data-color', xColor);
	document.querySelector('#no1 .n').setAttribute('data-color', sColor);
	document.querySelector('#no3 .x').setAttribute('data-color', oColor);
	document.querySelector('#no3 .o').setAttribute('data-color', kColor);
	
	rotateNumRight('2');
	
	testForWin();
}

function rotateHex2Left() {
	bColor = document.querySelector('#no2 .b').getAttribute('data-color');
	nColor = document.querySelector('#no2 .n').getAttribute('data-color');
	sColor = document.querySelector('#no2 .s').getAttribute('data-color');
	kColor = document.querySelector('#no2 .k').getAttribute('data-color');
	oColor = document.querySelector('#no2 .o').getAttribute('data-color');
	xColor = document.querySelector('#no2 .x').getAttribute('data-color');
	
	document.querySelector('#no2 .b').setAttribute('data-color', kColor);
	document.querySelector('#no2 .n').setAttribute('data-color', bColor);
	document.querySelector('#no2 .s').setAttribute('data-color', nColor);
	document.querySelector('#no2 .k').setAttribute('data-color', oColor);
	document.querySelector('#no2 .o').setAttribute('data-color', xColor);
	document.querySelector('#no2 .x').setAttribute('data-color', sColor);
	
	document.querySelector('#no0 .s').setAttribute('data-color', nColor);
	document.querySelector('#no0 .x').setAttribute('data-color', sColor);
	document.querySelector('#no1 .s').setAttribute('data-color', nColor);
	document.querySelector('#no1 .n').setAttribute('data-color', bColor);
	document.querySelector('#no3 .x').setAttribute('data-color', sColor);
	document.querySelector('#no3 .o').setAttribute('data-color', xColor);
	
	rotateNumLeft('2');
	
	testForWin();
}

function rotateHex3Right() {
	cColor = document.querySelector('#no3 .c').getAttribute('data-color');
	lColor = document.querySelector('#no3 .l').getAttribute('data-color');
	oColor = document.querySelector('#no3 .o').getAttribute('data-color');
	pColor = document.querySelector('#no3 .p').getAttribute('data-color');
	tColor = document.querySelector('#no3 .t').getAttribute('data-color');
	xColor = document.querySelector('#no3 .x').getAttribute('data-color');
	
	document.querySelector('#no3 .c').setAttribute('data-color', lColor);
	document.querySelector('#no3 .l').setAttribute('data-color', oColor);
	document.querySelector('#no3 .o').setAttribute('data-color', xColor);
	document.querySelector('#no3 .p').setAttribute('data-color', cColor);
	document.querySelector('#no3 .t').setAttribute('data-color', pColor);
	document.querySelector('#no3 .x').setAttribute('data-color', tColor);
	
	document.querySelector('#no0 .t').setAttribute('data-color', pColor);
	document.querySelector('#no0 .x').setAttribute('data-color', tColor);
	document.querySelector('#no2 .o').setAttribute('data-color', xColor);
	document.querySelector('#no2 .x').setAttribute('data-color', tColor);
	document.querySelector('#no4 .t').setAttribute('data-color', pColor);
	document.querySelector('#no4 .p').setAttribute('data-color', cColor);
	
	rotateNumRight('3');
	
	testForWin();
}

function rotateHex3Left() {
	cColor = document.querySelector('#no3 .c').getAttribute('data-color');
	lColor = document.querySelector('#no3 .l').getAttribute('data-color');
	oColor = document.querySelector('#no3 .o').getAttribute('data-color');
	pColor = document.querySelector('#no3 .p').getAttribute('data-color');
	tColor = document.querySelector('#no3 .t').getAttribute('data-color');
	xColor = document.querySelector('#no3 .x').getAttribute('data-color');
	
	document.querySelector('#no3 .c').setAttribute('data-color', pColor);
	document.querySelector('#no3 .l').setAttribute('data-color', cColor);
	document.querySelector('#no3 .o').setAttribute('data-color', lColor);
	document.querySelector('#no3 .p').setAttribute('data-color', tColor);
	document.querySelector('#no3 .t').setAttribute('data-color', xColor);
	document.querySelector('#no3 .x').setAttribute('data-color', oColor);
	
	document.querySelector('#no0 .t').setAttribute('data-color', xColor);
	document.querySelector('#no0 .x').setAttribute('data-color', oColor);
	document.querySelector('#no2 .o').setAttribute('data-color', lColor);
	document.querySelector('#no2 .x').setAttribute('data-color', oColor);
	document.querySelector('#no4 .t').setAttribute('data-color', xColor);
	document.querySelector('#no4 .p').setAttribute('data-color', tColor);
	
	rotateNumLeft('3');
	
	testForWin();
}

function rotateHex4Right() {
	dColor = document.querySelector('#no4 .d').getAttribute('data-color');
	jColor = document.querySelector('#no4 .j').getAttribute('data-color');
	pColor = document.querySelector('#no4 .p').getAttribute('data-color');
	qColor = document.querySelector('#no4 .q').getAttribute('data-color');
	tColor = document.querySelector('#no4 .t').getAttribute('data-color');
	wColor = document.querySelector('#no4 .w').getAttribute('data-color');
	
	document.querySelector('#no4 .d').setAttribute('data-color', pColor);
	document.querySelector('#no4 .j').setAttribute('data-color', dColor);
	document.querySelector('#no4 .p').setAttribute('data-color', tColor);
	document.querySelector('#no4 .q').setAttribute('data-color', jColor);
	document.querySelector('#no4 .t').setAttribute('data-color', wColor);
	document.querySelector('#no4 .w').setAttribute('data-color', qColor);
	
	document.querySelector('#no0 .t').setAttribute('data-color', wColor);
	document.querySelector('#no0 .w').setAttribute('data-color', qColor);
	document.querySelector('#no3 .t').setAttribute('data-color', wColor);
	document.querySelector('#no3 .p').setAttribute('data-color', tColor);
	document.querySelector('#no5 .q').setAttribute('data-color', jColor);
	document.querySelector('#no5 .w').setAttribute('data-color', qColor);
	
	rotateNumRight('4');
	
	testForWin();
}

function rotateHex4Left() {
	dColor = document.querySelector('#no4 .d').getAttribute('data-color');
	jColor = document.querySelector('#no4 .j').getAttribute('data-color');
	pColor = document.querySelector('#no4 .p').getAttribute('data-color');
	qColor = document.querySelector('#no4 .q').getAttribute('data-color');
	tColor = document.querySelector('#no4 .t').getAttribute('data-color');
	wColor = document.querySelector('#no4 .w').getAttribute('data-color');
	
	document.querySelector('#no4 .d').setAttribute('data-color', jColor);
	document.querySelector('#no4 .j').setAttribute('data-color', qColor);
	document.querySelector('#no4 .p').setAttribute('data-color', dColor);
	document.querySelector('#no4 .q').setAttribute('data-color', wColor);
	document.querySelector('#no4 .t').setAttribute('data-color', pColor);
	document.querySelector('#no4 .w').setAttribute('data-color', tColor);
	
	document.querySelector('#no0 .t').setAttribute('data-color', pColor);
	document.querySelector('#no0 .w').setAttribute('data-color', tColor);
	document.querySelector('#no3 .t').setAttribute('data-color', pColor);
	document.querySelector('#no3 .p').setAttribute('data-color', dColor);
	document.querySelector('#no5 .q').setAttribute('data-color', wColor);
	document.querySelector('#no5 .w').setAttribute('data-color', tColor);
	
	rotateNumLeft('4');
	
	testForWin();
}

function rotateHex5Right() {
	fColor = document.querySelector('#no5 .f').getAttribute('data-color');
	iColor = document.querySelector('#no5 .i').getAttribute('data-color');
	qColor = document.querySelector('#no5 .q').getAttribute('data-color');
	rColor = document.querySelector('#no5 .r').getAttribute('data-color');
	uColor = document.querySelector('#no5 .u').getAttribute('data-color');
	wColor = document.querySelector('#no5 .w').getAttribute('data-color');
	
	document.querySelector('#no5 .f').setAttribute('data-color', iColor);
	document.querySelector('#no5 .i').setAttribute('data-color', qColor);
	document.querySelector('#no5 .q').setAttribute('data-color', wColor);
	document.querySelector('#no5 .r').setAttribute('data-color', fColor);
	document.querySelector('#no5 .u').setAttribute('data-color', rColor);
	document.querySelector('#no5 .w').setAttribute('data-color', uColor);
	
	document.querySelector('#no0 .u').setAttribute('data-color', rColor);
	document.querySelector('#no0 .w').setAttribute('data-color', uColor);
	document.querySelector('#no4 .q').setAttribute('data-color', wColor);
	document.querySelector('#no4 .w').setAttribute('data-color', uColor);
	document.querySelector('#no6 .r').setAttribute('data-color', fColor);
	document.querySelector('#no6 .u').setAttribute('data-color', rColor);
	
	rotateNumRight('5');
	
	testForWin();
}

function rotateHex5Left() {
	fColor = document.querySelector('#no5 .f').getAttribute('data-color');
	iColor = document.querySelector('#no5 .i').getAttribute('data-color');
	qColor = document.querySelector('#no5 .q').getAttribute('data-color');
	rColor = document.querySelector('#no5 .r').getAttribute('data-color');
	uColor = document.querySelector('#no5 .u').getAttribute('data-color');
	wColor = document.querySelector('#no5 .w').getAttribute('data-color');
	
	document.querySelector('#no5 .f').setAttribute('data-color', rColor);
	document.querySelector('#no5 .i').setAttribute('data-color', fColor);
	document.querySelector('#no5 .q').setAttribute('data-color', iColor);
	document.querySelector('#no5 .r').setAttribute('data-color', uColor);
	document.querySelector('#no5 .u').setAttribute('data-color', wColor);
	document.querySelector('#no5 .w').setAttribute('data-color', qColor);
	
	document.querySelector('#no0 .u').setAttribute('data-color', wColor);
	document.querySelector('#no0 .w').setAttribute('data-color', qColor);
	document.querySelector('#no4 .q').setAttribute('data-color', iColor);
	document.querySelector('#no4 .w').setAttribute('data-color', qColor);
	document.querySelector('#no6 .r').setAttribute('data-color', uColor);
	document.querySelector('#no6 .u').setAttribute('data-color', wColor);
	
	rotateNumLeft('5');
	
	testForWin();
}

function rotateHex6Right() {
	eColor = document.querySelector('#no6 .e').getAttribute('data-color');
	hColor = document.querySelector('#no6 .h').getAttribute('data-color');
	mColor = document.querySelector('#no6 .m').getAttribute('data-color');
	rColor = document.querySelector('#no6 .r').getAttribute('data-color');
	uColor = document.querySelector('#no6 .u').getAttribute('data-color');
	vColor = document.querySelector('#no6 .v').getAttribute('data-color');
	
	document.querySelector('#no6 .e').setAttribute('data-color', rColor);
	document.querySelector('#no6 .h').setAttribute('data-color', eColor);
	document.querySelector('#no6 .m').setAttribute('data-color', hColor);
	document.querySelector('#no6 .r').setAttribute('data-color', uColor);
	document.querySelector('#no6 .u').setAttribute('data-color', vColor);
	document.querySelector('#no6 .v').setAttribute('data-color', mColor);
	
	document.querySelector('#no0 .u').setAttribute('data-color', vColor);
	document.querySelector('#no0 .v').setAttribute('data-color', mColor);
	document.querySelector('#no5 .r').setAttribute('data-color', uColor);
	document.querySelector('#no5 .u').setAttribute('data-color', vColor);
	document.querySelector('#no1 .m').setAttribute('data-color', hColor);
	document.querySelector('#no1 .v').setAttribute('data-color', mColor);
	
	rotateNumRight('6');
	
	testForWin();
}

function rotateHex6Left() {
	eColor = document.querySelector('#no6 .e').getAttribute('data-color');
	hColor = document.querySelector('#no6 .h').getAttribute('data-color');
	mColor = document.querySelector('#no6 .m').getAttribute('data-color');
	rColor = document.querySelector('#no6 .r').getAttribute('data-color');
	uColor = document.querySelector('#no6 .u').getAttribute('data-color');
	vColor = document.querySelector('#no6 .v').getAttribute('data-color');
	
	document.querySelector('#no6 .e').setAttribute('data-color', hColor);
	document.querySelector('#no6 .h').setAttribute('data-color', mColor);
	document.querySelector('#no6 .m').setAttribute('data-color', vColor);
	document.querySelector('#no6 .r').setAttribute('data-color', eColor);
	document.querySelector('#no6 .u').setAttribute('data-color', rColor);
	document.querySelector('#no6 .v').setAttribute('data-color', uColor);
	
	document.querySelector('#no0 .u').setAttribute('data-color', rColor);
	document.querySelector('#no0 .v').setAttribute('data-color', uColor);
	document.querySelector('#no5 .r').setAttribute('data-color', eColor);
	document.querySelector('#no5 .u').setAttribute('data-color', rColor);
	document.querySelector('#no1 .m').setAttribute('data-color', vColor);
	document.querySelector('#no1 .v').setAttribute('data-color', uColor);
	
	rotateNumLeft('6');
	
	testForWin();
}

document.onkeydown = function(e) {
	e = e || window.event;
	if (e.keyCode == '37') {
		strToFunction(document.getElementById('rotateLeft').getAttribute('onclick'));
	}
	if (e.keyCode == '39') {
		strToFunction(document.getElementById('rotateRight').getAttribute('onclick'));
	}
	if (e.keyCode == '48' || e.keyCode == '96') {
		setNum('0');
	}
	if (e.keyCode == '49' || e.keyCode == '97') {
		setNum('1');
	}
	if (e.keyCode == '50' || e.keyCode == '98') {
		setNum('2');
	}
	if (e.keyCode == '51' || e.keyCode == '99') {
		setNum('3');
	}
	if (e.keyCode == '52' || e.keyCode == '100') {
		setNum('4');
	}
	if (e.keyCode == '53' || e.keyCode == '101') {
		setNum('5');
	}
	if (e.keyCode == '54' || e.keyCode == '102') {
		setNum('6');
	}
}

function hideWarning() {
	document.getElementById('warning').setAttribute('class', 'hidden');
}

function saveState() {
	var state = document.getElementById('content').innerHTML;
	localStorage.setItem('gameState', state);
	localStorage.setItem('gameStateScore', score);
}

function restoreState() {
	if (localStorage.getItem('gameState') !== null) {
		html = localStorage.getItem('gameState');
		currentScore = localStorage.getItem('gameStateScore');
		document.getElementById('content').innerHTML = html;
		window.setTimeout(function() {
			localStorage.setItem('gameStateScore', currentScore);
			document.getElementById('score').innerHTML = currentScore;
			score = parseInt(currentScore);
		}, 0);
	}
	unsetNums();
}

function deleteState() {
	if (localStorage.getItem('gameState') !== null) {
		localStorage.removeItem('gameState');
		localStorage.removeItem('gameStateScore');
	}
}
