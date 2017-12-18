function changeValues() {

    var x = parseFloat(document.getElementById('x').value),
        y = parseFloat(document.getElementById('y').value),
        result = document.getElementById('result1');

    if (x > y) {
        x = [y, y = x][0];
    }

    result.value = 'X = ' + x + ' (наименьшее), Y = ' + y;

    if (x === y) result.value = 'Значения равны';

}

function getTriangle() {

    var ab, ac, bc,
        ax = parseFloat(document.getElementById('ax').value),
        ay = parseFloat(document.getElementById('ay').value),
        az = parseFloat(document.getElementById('az').value),
        bx = parseFloat(document.getElementById('bx').value),
        by = parseFloat(document.getElementById('by').value),
        bz = parseFloat(document.getElementById('bz').value),
        cx = parseFloat(document.getElementById('cx').value),
        cy = parseFloat(document.getElementById('cy').value),
        cz = parseFloat(document.getElementById('cz').value),
        result = document.getElementById('result2');

    if ((!isNaN(az) || !isNaN(bz) || !isNaN(cz))) {
        console.log('triangle in 3d');
        ab = Math.sqrt(Math.pow((bx - ax), 2) + Math.pow((by - ay), 2) + Math.pow((bz - az), 2)).toFixed(2);
        ac = Math.sqrt(Math.pow((cx - ax), 2) + Math.pow((cy - ay), 2) + Math.pow((cz - az), 2)).toFixed(2);
        bc = Math.sqrt(Math.pow((cx - bx), 2) + Math.pow((cy - by), 2) + Math.pow((cz - bz), 2)).toFixed(2);
    } else {
        console.log('triangle in 2d');
        ab = Math.sqrt(Math.pow((bx - ax), 2) + Math.pow((by - ay), 2)).toFixed(2);
        ac = Math.sqrt(Math.pow((cx - ax), 2) + Math.pow((cy - ay), 2)).toFixed(2);
        bc = Math.sqrt(Math.pow((cx - bx), 2) + Math.pow((cy - by), 2)).toFixed(2);
    }

    if (Math.round((Math.pow(ab, 2) + Math.pow(ac, 2))) === Math.round(Math.pow(bc, 2))
        || Math.round((Math.pow(ac, 2) + Math.pow(bc, 2))) === Math.round(Math.pow(ab, 2))
        || Math.round((Math.pow(ab, 2) + Math.pow(bc, 2))) === Math.round(Math.pow(ac, 2))) {
        result.value = 'Треугольник прямоугольный';
    } else
        result.value = 'Треугольник не прямоугольный';

}

function getSeason() {

    var month = parseInt(document.getElementById('month').value);

    if ((month >= 1 && month <= 2) || month === 12) {
        alert("Зима")
    } else if (month >= 3 && month <= 5) {
        alert("Весна")
    } else if (month >= 6 && month <= 8) {
        alert("Лето")
    } else if (month >= 9 && month <= 11) {
        alert("Осень")
    } else alert("Not a month");

}


function getMathTable() {

    for (i = 1; i <= 10; i++) {
        document.write('<tr style="background-color: #f8f8f8">');
        for (j = 1; j <= 10; j++) {
            document.write('<td style="padding: 6px;">' + (i * j) + '</td>')
        }
        document.write('</tr>');
    }

}


function getLength() {

    var value = parseFloat(document.getElementById('value').value),
        lenghtype = parseInt(document.getElementById('lenghtype').value);

    switch (lenghtype) {
        case 1:
            alert('Длина отрезка = ' + (value / 10).toFixed(3) + ' м.');        // дециметры
            break;
        case 2:
            alert('Длина отрезка = ' + (value * 1000).toFixed(3) + ' м.');      // километры
            break;
        case 3:
            alert('Длина отрезка = ' + value + ' м.');                          // метры
            break;
        case 4:
            alert('Длина отрезка = ' + (value / 1000).toFixed(3) + ' м.');      // миллиметры
            break;
        case 5:
            alert('Длина отрезка = ' + (value / 100).toFixed(3) + ' м.');       // сантиметры
            break;
    }

}