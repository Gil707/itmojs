function arUnion() {

    var arr1 = [12, 4, 3, 10, 1, 20],
        arr2 = [-3, -7, -100, -33],
        union1 = document.getElementById('union1'),
        union2 = document.getElementById('union2');

    var after = arr1.concat(arr2),
        before = arr2.concat(arr1);

    union1.value = before.toString();
    union2.value = after.toString();

}


function getXO() {

    // var arr = document.getElementById('xoarray').value.split(','),
    var arr = [1, null, 0, null, 1, null, null, null, null],
        icon = '';

    for (i = 0; i < arr.length; i += 3) {
        document.write('<tr>');
        for (j = i; j < i + 3; j++) {
            if (arr[j] === 1) {
                icon = 'X';
            } else if (arr[j] === 0) {
                icon = '0';
            } else icon = '';
            document.write('<td style="padding: 6px; width: 20px; height: 20px; border: 1px solid gray; text-align: center">' + icon + '</td>')
        }
        document.write('</tr>');
    }
}

function delMinMax() {

    var arr = document.getElementById('delarray').value.split(','),
        result = document.getElementById('delarrayresult');

    for (k = 0, len = arr.length; k < len; k++) {
        arr[k] = parseInt(arr[k]);
    }

    var min = arr[0], max = arr[0], maxindex = 0, minindex = 0;

    for (i = 0, l = arr.length; i < l; i++) {

        if (arr[i] >= max) {
            maxindex = i;
            max = arr[i];
        } else if (arr[i] < min) {
            minindex = i;
            min = arr[i];
        }

    }

    // delete arr[maxindex];
    // delete arr[minindex];

    arr.splice(minindex, 1);
    arr.splice(maxindex - ((maxindex > minindex) ? 1 : 0), 1);

    result.value = ('Result array: ' + arr);

}

function sortArrayCustom() {

    var arr = document.getElementById('sortarray').value.split(','),
        result = document.getElementById('sortarrayresult');

    var temp, i = 1;

    for (var k = 0, len = arr.length; k < len; k++) {
        arr[k] = parseInt(arr[k]);
    }

    console.time('gnomesort');

    while (i < arr.length) {
        if (i === 0 || arr[i - 1] <= arr[i])
            i++;
        else {
            temp = arr[i];
            arr[i] = arr[i - 1];
            arr[i - 1] = temp;
            i--;
        }
    }

    console.timeEnd('gnomesort');

    result.value = (arr);

}


/*  Classwork  */

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
            if (arr[i] < arr[j]) {
                [arr[j], arr[i]] = [arr[i], arr[j]];
            }
        }

    }

    console.log(arr);
}