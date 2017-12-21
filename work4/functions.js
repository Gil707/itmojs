function minMax() {

    var arr = [2, 3, 7, 13, 5, 0, 20],
        min = arr[0], max = arr[0], s = 0;

    for (i = 0, l = arr.length; i < l; i++) {

        if (arr[i] >= max) {
            max = arr[i];
        } else min = arr[i];

        s += arr[i];
    }

    alert('Max: ' + max + ', min:' + min + ', avg: ' + (s / arr.length).toFixed(3));

    arr.pop();
    arr.shift();

    alert(arr);
}


function checkSpell() {

    var str = prompt('Введите строку', 'Привет мир'),
        path = prompt('Введите кусок текста'),
        pattern = '', pathPattern;

    for (i = 0, l = path.length; i < l; i++) {
        pathPattern = '';
        for (j = 0, k = path.lengthl; j < k; j++) {
            if (i === j) {
                pathPattern += '.';
            } else {
                pathPattern += path[i];
            }
        }

        if (i !== path.length - 1) {
            pathPattern += '|';
        }
        pattern += pathPattern;
    }

    var regexp = new RegExp(pattern, 'i');

    if (regexp.test(str)) {
        alert('Совпадение найдено ' + str.match(regexp));
    } else alert('Совпадений не найдено');
}

function checkSpeed() {

    var arr = [];

    console.time("1M push/pop");

    for (i = 0; i < 1000000; i++) {
        arr.push(i);
    }

    for (i = 0; i < 1000000; i++) {
        arr.pop();
    }

    console.timeEnd("1M push/pop");

    console.time("1M shift/unshift");

    for (i = 0; i < 100000; i++) {
        arr.unshift(i);
    }

    for (i = 0; i < 100000; i++) {
        arr.shift();
    }

    console.timeEnd("1M shift/unshift");
}


function bubble() {

    var arr = [2, 6, 3, 9, 0, 12, 66, 3, 7, 98, 12, 54, 0, 3, 65, 5, 1, 67, 34, 42, 234, 53, 12, 54],
        temp;

    console.log(arr);

    for (i = 0; i < arr.length; i++) {
        temp = arr[i];
        for (j = 0; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }

    }

    console.log(arr);
}