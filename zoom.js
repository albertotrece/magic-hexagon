width = 1024;
height = 768;
pos = 'fixed';

function zoom(value, pos) {
	widthHeight = 100 / value + '%';
	topLeft1 = (100 / value) / 2 - 50 + '%';
	if((100 / value) / 2 - 50 > 0) {
		topLeft = '-' + topLeft1;
	} else {
		topLeft = topLeft1.replace('-', '');
	}
	document.body.setAttribute('style', 'position: ' + pos + '; -webkit-transform: scale(' + value + '); transform: scale(' + value + '); width: ' + widthHeight + '; height: ' + widthHeight + '; top: ' + topLeft + '; left: ' + topLeft + ';');
}

function autoZoom(width, height, pos) {
	optimum = width + height;
	actual = window.innerWidth + window.innerHeight;
	zoom(actual / optimum, pos);
}

function startAutoZoom(width, height, pos) {
	width = width;
	height = height;
	pos = pos;
	specialAutoZoom = function() {
		autoZoom(width, height, pos);
	}
	window.onresize = specialAutoZoom;
}
