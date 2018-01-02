// 1.

student = {
    name: 'Ivan',
    lastname: 'Ivanov',
    age: 19,
    interests: ['Теннис', 'Хоккей', 'Футбол', 'Программирование', 'WebAssembly'],
    education: 'SPBSTU',
    ageEnding: function () {
        var end, num, endings = ['год', 'года', 'лет'];
        if (this.age >= 11 && this.age <= 19) {
            end = endings[2];
        }
        else {
            i = this.age % 10;
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

        return this.age + ' ' + end;
    },
    printContent: function () {
        var interestsLi = '',
            str = '',
            maxItm = this.interests.length - 1;
        for (var itm in this.interests) {
            interestsLi += this.interests[itm];
            if (itm < maxItm) {
                interestsLi += ", ";
            }
        }
        str = this.name + ' ' + this.lastname + '. ' + this.ageEnding() + '. Interesting in : ' + interestsLi + ". Studying in " + this.education + ".";
        return str;
    }
};

function getStudent() {
    alert(student.printContent());
}


// 2. factorial

function getFactorial(n) {
    return (n !== 1) ? n * getFactorial(n - 1) : 1;
}

function showFactResult() {
    var n = +document.getElementById('nfact').value;
    alert(n + '! = ' + getFactorial(n));
}


// 3. closure

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function sortNumber(a, b) {
    return a - b;
}

function getClosure() {
    var nums = [];
    return function () {
        var num = 0;
        while (nums.length <= 100) {
            num = getRandomInt(1, 101);
            if (nums.indexOf(num) === -1) {
                nums.push(num);
                return num;
            }
        }
    }
}

function initClosure() {
    var arr = [],
        gen = getClosure();
    for (var i = 0; i < 100; i++) {
        arr.push(gen());
    }
    console.log('Unsorted array = ' + arr + ' items: ' + arr.length);
    console.log('Sorted array = ' + arr.sort(sortNumber));
}


// 6 arrays

function getArrayFunc() {
    var arr = document.getElementById('custarray').value.split(','),
        max = document.getElementById('arrmax'),
        min = document.getElementById('arrmin'),
        avg = document.getElementById('arravg'),
        arrcopy = document.getElementById('arrcopy');

    for (var k = 0, len = arr.length; k < len; k++) {
        arr[k] = parseInt(arr[k]);
    }

    max.value = arrayUtils.max(arr);
    min.value = arrayUtils.min(arr);
    avg.value = arrayUtils.avg(arr);

    var clone = arrayUtils.copy(arr);

    arrcopy.value = clone.toString();
}


// 7 Caesars algorithm


function caesarCipher() {
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase(),
        othersymbols = '[$&+,.:;=?@#|\'<>.-^*()%!]1234567890',
        shiftedAlphabet,
        number,
        string = document.getElementById('cstring').value,
        shift = +document.getElementById('cshift').value,
        output = '',
        outputLabel = document.getElementById('csres');

    if (typeof string === 'string') {
        shiftedAlphabet = alphabet.slice(shift);
        shiftedAlphabet += alphabet.slice(0, shift);
        shiftedAlphabet += othersymbols;
        alphabet += othersymbols;

        for (i = 0; i < string.length; i++) {
            number = alphabet.indexOf(string[i]);
            output += shiftedAlphabet[number];
        }
    } else return null;

    outputLabel.value = output;

}
