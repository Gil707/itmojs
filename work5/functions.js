// 1.

function Student(name, surname, age, interests, eduplace) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.interests = interests;
    this.eduplace = eduplace;
}

var studentPetr = new Student('Petr', 'Petrov', 19, ['football', 'hockey', 'tennis'], 'SPBSTU'),
    studentOleg = new Student('Oleg', 'Olegov', 20, ['bitcoin', 'etherium', 'blockchain'], 'ITMO');

function showStudent(student) {
    return ('Student name: ' + student.name + ', surname: ' + student.surname +
        ', age: ' + student.age + ', his interests: ' + student.interests.toString() + ', education: ' + student.eduplace);
}

document.write('<h2>1. Students</h2>'
    + '<p>Get from object: ' + showStudent(studentPetr) + '</p>'
    + '<p>Get from object: ' + showStudent(studentOleg) + '</p>');


// 2

var arr1 = [1, 2, 5, 6, 7, 8, 9],
    arr2 = [2, 3, 6, 7, 4, 5],
    joindearr = [];

joindearr = arr1.concat(arr2);

function removeDublicates(arr) {
    var obj = {};

    for (var i = 0; i < arr.length; i++) {
        var value = arr[i];
        obj[value] = true;
    }

    return Object.keys(obj);
}

document.write('<h2>2. Concat arrays</h2>' +
    '<i>' + arr1.toString() + '</i> + <i>' + arr2.toString() + '</i>' +
    '<p>' + removeDublicates(joindearr) + '</p>');


// 3

function getNFibs(n) {
    var a = 1,
        b = 1,
        res = [a, b];
    if (n === 0) {
        return 0;
    }
    else if (n === 1) {
        return 1;
    }
    else if (n === 2) {
        return res;
    } else {
        for (var i = 3; i <= n; i++) {
            var c = a + b;
            a = b;
            b = c;

            res.push(b);
        }
        return res;
    }
}

var itms = 14;

document.write('<h2>3. Fibonachi N-s</h2>'
    + '<i>nums: ' + itms + '</i>'
    + '<p>' + getNFibs(itms) + '</p>');

// 4

var dayvars = ['день', 'дня', 'дней'],
    numbers = 365,
    today = new Date(),
    nwdate = new Date('2018-01-01'),
    diffd = Math.floor((nwdate - today) / (1000 * 60 * 60 * 24));

function getDayEnding(days, endings) {
    var end, i;
    if (days >= 11 && days <= 19) {
        end = endings[2];
    }
    else {
        i = days % 10;
        switch (i) {
            case (1):
                end = endings[0];
                break;
            case (2):
            case (3):
            case (4):
                end = endings[1];
                break;
            default:
                end = endings[2];
        }
    }
    return end;
}

document.write('<h2>4. Days...</h2>' + '<p>Days required: ' + numbers + ' ' + getDayEnding(numbers, dayvars) + '</p>');
document.write('<p>Days to new year: ' + diffd + ' ' + getDayEnding(diffd, dayvars));
