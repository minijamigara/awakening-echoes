
function _(id) {
    return document.getElementById(id);
}

var droppedIn = false;



window.onload = function () {
	console.log("this is main")
    var dropZone1 = _('drop_zone1');
	var dropZone2 = _('drop_zone2');
	var dropZone3 = _('drop_zone3');
	var dropZone4 = _('drop_zone4');
	var dropZone5 = _('drop_zone5');
	var dropZone6 = _('drop_zone6');
	var dropZone7 = _('drop_zone7');
	var dropZone8 = _('drop_zone8');
	var dropZone9 = _('drop_zone9');
	var dropZone10 = _('drop_zone10');
	var dropZone11 = _('drop_zone11');
	var dropZone12 = _('drop_zone12');

	dropZone1.addEventListener('dragenter', handleDragEnter, false);
    dropZone1.addEventListener('dragleave', handleDragLeave, false);
    dropZone1.addEventListener('drop', handleDragDrop, false);
	
	dropZone2.addEventListener('dragenter', handleDragEnter, false);
    dropZone2.addEventListener('dragleave', handleDragLeave, false);
    dropZone2.addEventListener('drop', handleDragDrop, false);
	
    dropZone3.addEventListener('dragenter', handleDragEnter, false);
    dropZone3.addEventListener('dragleave', handleDragLeave, false);
    dropZone3.addEventListener('drop', handleDragDrop, false);
	
    dropZone4.addEventListener('dragenter', handleDragEnter, false);
    dropZone4.addEventListener('dragleave', handleDragLeave, false);
    dropZone4.addEventListener('drop', handleDragDrop, false);
	
    dropZone5.addEventListener('dragenter', handleDragEnter, false);
    dropZone5.addEventListener('dragleave', handleDragLeave, false);
    dropZone5.addEventListener('drop', handleDragDrop, false);

    dropZone6.addEventListener('dragenter', handleDragEnter, false);
    dropZone6.addEventListener('dragleave', handleDragLeave, false);
    dropZone6.addEventListener('drop', handleDragDrop, false);

    dropZone7.addEventListener('dragenter', handleDragEnter, false);
    dropZone7.addEventListener('dragleave', handleDragLeave, false);
    dropZone7.addEventListener('drop', handleDragDrop, false);

    dropZone8.addEventListener('dragenter', handleDragEnter, false);
    dropZone8.addEventListener('dragleave', handleDragLeave, false);
    dropZone8.addEventListener('drop', handleDragDrop, false);

    dropZone9.addEventListener('dragenter', handleDragEnter, false);
    dropZone9.addEventListener('dragleave', handleDragLeave, false);
    dropZone9.addEventListener('drop', handleDragDrop, false);

    dropZone10.addEventListener('dragenter', handleDragEnter, false);
    dropZone10.addEventListener('dragleave', handleDragLeave, false);
    dropZone10.addEventListener('drop', handleDragDrop, false);

    dropZone11.addEventListener('dragenter', handleDragEnter, false);
    dropZone11.addEventListener('dragleave', handleDragLeave, false);
    dropZone11.addEventListener('drop', handleDragDrop, false);

    dropZone12.addEventListener('dragenter', handleDragEnter, false);
    dropZone12.addEventListener('dragleave', handleDragLeave, false);
    dropZone12.addEventListener('drop', handleDragDrop, false);	

    function handleDragEnter(e) {
        _('app_status').innerHTML = "You are dragging over the " + e
            .target
            .getAttribute('id');
    }

    function handleDragLeave(e) {
        _('app_status').innerHTML = "You left the " + e
            .target
            .getAttribute('id');
    }

    function handleDragDrop(e) {
        e.preventDefault();
        var element_id = e
            .dataTransfer
            .getData("text");
        e
            .target
            .appendChild(_(element_id));
        droppedIn = true;
        _('app_status').innerHTML = "You droped " + element_id + " into drop zone";
    }

    // Draggable element functionality
    var object1 = _('object1');
    var object2 = _('object2');
    var object3 = _('object3');
	var object4 = _('object4');
    var object5 = _('object5');
	var object6 = _('object6');
    var object7 = _('object7');
	var object8 = _('object8');

    var activeEvent = '';
    var originalX = '';
    var originalY = '';

    object1.addEventListener('dragstart', handleDragStart, false);
    object1.addEventListener('dragend', handleDragEnd, false);
    object1.addEventListener('touchstart', handleTouchStart, false);
    object1.addEventListener('touchmove', handleTouchMove, false);
    object1.addEventListener('touchend', handleTouchEnd, false);

    object2.addEventListener('dragstart', handleDragStart, false);
    object2.addEventListener('dragend', handleDragEnd, false);
    object2.addEventListener('touchstart', handleTouchStart, false);
    object2.addEventListener('touchmove', handleTouchMove, false);
    object2.addEventListener('touchend', handleTouchEnd, false);

    object3.addEventListener('dragstart', handleDragStart, false);
    object3.addEventListener('dragend', handleDragEnd, false);
    object3.addEventListener('touchstart', handleTouchStart, false);
    object3.addEventListener('touchmove', handleTouchMove, false);
    object3.addEventListener('touchend', handleTouchEnd, false);
	
	object4.addEventListener('dragstart', handleDragStart, false);
    object4.addEventListener('dragend', handleDragEnd, false);
    object4.addEventListener('touchstart', handleTouchStart, false);
    object4.addEventListener('touchmove', handleTouchMove, false);
    object4.addEventListener('touchend', handleTouchEnd, false);
	
	object5.addEventListener('dragstart', handleDragStart, false);
    object5.addEventListener('dragend', handleDragEnd, false);
    object5.addEventListener('touchstart', handleTouchStart, false);
    object5.addEventListener('touchmove', handleTouchMove, false);
    object5.addEventListener('touchend', handleTouchEnd, false);
	
	object6.addEventListener('dragstart', handleDragStart, false);
    object6.addEventListener('dragend', handleDragEnd, false);
    object6.addEventListener('touchstart', handleTouchStart, false);
    object6.addEventListener('touchmove', handleTouchMove, false);
    object6.addEventListener('touchend', handleTouchEnd, false);
	
	object7.addEventListener('dragstart', handleDragStart, false);
    object7.addEventListener('dragend', handleDragEnd, false);
    object7.addEventListener('touchstart', handleTouchStart, false);
    object7.addEventListener('touchmove', handleTouchMove, false);
    object7.addEventListener('touchend', handleTouchEnd, false);
	
	object8.addEventListener('dragstart', handleDragStart, false);
    object8.addEventListener('dragend', handleDragEnd, false);
    object8.addEventListener('touchstart', handleTouchStart, false);
    object8.addEventListener('touchmove', handleTouchMove, false);
    object8.addEventListener('touchend', handleTouchEnd, false);

    function handleDragStart(e) {
        _('app_status').innerHTML = "Dragging the element " + e
            .target
            .getAttribute('id');
        e.dataTransfer.dropEffect = "move";
        e
            .dataTransfer
            .setData("text", e.target.getAttribute('id'));
    }

    function handleDragEnd(e) {
        if (droppedIn == false) {
            _('app_status').innerHTML = "You let the " + e
                .target
                .getAttribute('id') + " go.";
        }
        droppedIn = false;
    }

    function handleTouchStart(e) {
        _('app_status').innerHTML = "Touch start with element " + e
            .target
            .getAttribute('id');
        originalX = (e.target.offsetLeft - 10) + "px";
        originalY = (e.target.offsetTop - 10) + "px";
        activeEvent = 'start';
    }

    function handleTouchMove(e) {
        var touchLocation = e.targetTouches[0];
        var pageX = (touchLocation.pageX - 50) + "px";
        var pageY = (touchLocation.pageY - 50) + "px";
        _('app_status').innerHTML = "Touch x " + pageX + " Touch y " + pageY;
        e.target.style.position = "absolute";
        e.target.style.left = pageX;
        e.target.style.top = pageY;
        activeEvent = 'move';
    }

    function handleTouchEnd(e) {
        e.preventDefault();
        if (activeEvent === 'move') {
            var pageX = (parseInt(e.target.style.left) - 50);
            var pageY = (parseInt(e.target.style.top) - 50);

            if (detectTouchEnd(dropZone.offsetLeft, dropZone.offsetTop, pageX, pageY, dropZone.offsetWidth, dropZone.offsetHeight)) {
                dropZone.appendChild(e.target);
                e.target.style.position = "initial";
                droppedIn = true;
                _('app_status').innerHTML = "You droped " + e
                    .target
                    .getAttribute('id') + " into drop zone";
            } else {
                e.target.style.left = originalX;
                e.target.style.top = originalY;
                _('app_status').innerHTML = "You let the " + e
                    .target
                    .getAttribute('id') + " go.";
            }
        }
    }

    function detectTouchEnd(x1, y1, x2, y2, w, h) {
        //Very simple detection here
        if (x2 - x1 > w) 
            return false;
        if (y2 - y1 > h) 
            return false;
        return true;
    }
}
