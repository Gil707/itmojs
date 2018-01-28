function summDigits() {
    var intvalue = parseInt(document.getElementById('intvalue').value),
        intvalueresult = document.getElementById('intvalueresult'),
        summ = 0;

    while (intvalue > 0)
    {
        summ += intvalue % 10;
        intvalue = Math.floor(intvalue/10);
    }
    intvalueresult.value = summ;
}

function doubleChar() {
    var textvalue = document.getElementById('textvalue').value,
        charvalue = document.getElementById('charvalue').value,
        count = parseInt(document.getElementById('count').value),
        textresult = document.getElementById('textresult'),
        inject = '';

    var regexp = new RegExp(charvalue, 'g');

    for (i=0; i < count; i++) {
        inject += charvalue;
    }

    textresult.value = textvalue.replace(regexp, inject);
}

function checkPwd() {
    var pwd = document.getElementById('pwd').value,
        pwdresult = document.getElementById('pwdresult');

    var reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=(.*?[0-9]){2})(?=.*?[#?!@$%^&*-]).{9,}$/;

    pwdresult.value = reg.test(pwd);

}


function phoneFormat() {

    var phone = document.getElementById('phone').value,
        phoneresult = document.getElementById('phoneresult');

    var reg = /\+?\d\(\d{3}\)\d{3}-\d{2}-\d{2}/;

    // alert(reg.test(phone));

    phoneresult.value = reg.test(phone);

}

function mailCheck() {

    var mail = document.getElementById('mail').value,
        mailresult = document.getElementById('mailresult');

    var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // var reg = /\w+@\w+\.\w+/;

    // alert(reg.test(phone));

    mailresult.value = reg.test(mail);

}

function dateCheck() {

    var date = document.getElementById('date').value,
        dateresult = document.getElementById('dateresult');

    var reg = /(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[012])\.(19|20)\d\d/;


    dateresult.value = reg.test(date);

}

function summ() {

    var sum = 0,
        i = 0;

    while (i <= 100) {
        sum += i;
        i++;
    }

    alert(sum);

}

function xor() {

    var text = prompt('Введите текст для шифрования'),
        key = prompt('Введите ключ'),
        res = '',
        i = 0,
        codeKey = key.charCodeAt(0),
        codeSymbolFromText, lockSymbolCode;

    while (i < text.length) {
        codeSymbolFromText = text.charCodeAt(i);
        lockSymbolCode = codeKey ^ codeSymbolFromText;
        res += String.fromCharCode(lockSymbolCode);
        i++;
    }

    console.log(res);
    alert('Шифрованная строка: ' + res)
}