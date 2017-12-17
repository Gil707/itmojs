function changeValues() {

    var x = parseFloat(document.getElementById('x').value),
        y = parseFloat(document.getElementById('y').value),
        result = document.getElementById('result1');

    x = [y, y = x][0];

    result.value = 'X = ' + x + ', Y = ' + y;

}

function getTriangle() {

    var ab, ac, bc,
        ax = parseFloat(document.getElementById('ax').value),
        ay = parseFloat(document.getElementById('ay').value),
        bx = parseFloat(document.getElementById('bx').value),
        by = parseFloat(document.getElementById('by').value),
        cx = parseFloat(document.getElementById('cx').value),
        cy = parseFloat(document.getElementById('cy').value),
        result = document.getElementById('result2');

    ab = Math.sqrt(Math.pow((bx - ax), 2) + Math.pow((by - ay), 2)).toFixed(2);
    ac = Math.sqrt(Math.pow((cx - ax), 2) + Math.pow((cy - ay), 2)).toFixed(2);
    bc = Math.sqrt(Math.pow((cx - bx), 2) + Math.pow((cy - by), 2)).toFixed(2);

    if (Math.round((Math.pow(ab, 2) + Math.pow(ac, 2))) === Math.round(Math.pow(bc, 2))
        || Math.round((Math.pow(ac, 2) + Math.pow(bc, 2))) === Math.round(Math.pow(ab, 2))
        || Math.round((Math.pow(ab, 2) + Math.pow(bc, 2))) === Math.round(Math.pow(ac, 2))) {
        result.value = 'Треугольник прямоугольный';
    } else
        result.value = 'Треугольник не прямоугольный';

}