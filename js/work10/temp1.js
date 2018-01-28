addEventListener('keydown', function (e) {

    if (e.keyCode === 37) {
        // left
        red.style.left = (parseInt(red.style.left) - 10) + 'px';
        checkIntersection();
    }
    else if (e.keyCode === 39) {
        // right
        red.style.left = (parseInt(red.style.left) + 10) + 'px';
        checkIntersection();
    }
    else if (e.keyCode === 40) {
        // down
        red.style.top = (parseInt(red.style.top) + 10) + 'px';
        checkIntersection();
    }
    else if (e.keyCode === 38) {
        // up
        red.style.top = (parseInt(red.style.top) - 10) + 'px';
        checkIntersection();
    }

});

function getIntersection(box1, box2) {

    var x1_1 = parseInt(box1.style.left);
    var x2_1 = parseInt(box1.style.left) + parseInt(getComputedStyle(box1).width);
    var y1_1 = parseInt(box1.style.top);
    var y2_1 = parseInt(box1.style.top) + parseInt(getComputedStyle(box1).height);

    var x1_2 = parseInt(getComputedStyle(box2).left);
    var x2_2 = parseInt(getComputedStyle(box2).left) + parseInt(getComputedStyle(box2).width);
    var y1_2 = parseInt(getComputedStyle(box2).top);
    var y2_2 = parseInt(getComputedStyle(box2).top) + parseInt(getComputedStyle(box2).height);

    var intersX = ((x1_2 >= x1_1 && x1_2 <= x2_1) || (x1_1 <= x2_2 && x2_2 <= x2_1));
    var intersY = ((y1_2 >= y1_1 && y1_2 <= y2_1) || (y1_1 <= y2_2 && y2_2 <= y2_1));

    return intersX && intersY;
}

function checkIntersection() {
    if (getIntersection(red, green)) {
        green.style.backgroundColor = 'red';
    } else green.style.backgroundColor = 'green';
}