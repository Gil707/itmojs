// 1

function clock() {
    var date = new Date(),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds();
    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;
    document.getElementById('clock').innerHTML = '<span style="color: orange">'
        + hours
        + '</span>:<span style="color: green">'
        + minutes
        + '</span>:<span style="color: darkcyan">'
        + seconds
        + '</span>';
    setTimeout('clock()', 1000);
}


// 2 product

var product = {
    name: 'LED телевизор SAMSUNG UE49MU8000UXRU "R", 49", Ultra HD 4K (2160p)',
    company: 'Samsung',
    price: 75040,
    weight: 17.4,
    sku: 3253,
    photo: 'https://mtpark.ru/image/cache/data-zubmit-ue49mu8000uxru-500x500.jpg',
    link: 'https://www.citilink.ru/catalog/audio_and_digits/tv/474694/',
    showCard: function (id) {
        document.getElementById(id).innerHTML =
            '<h2>' + this.name + '</h2>' +
            '<h4 style="color: gray">' + this.company + '</h4>' +
            '<p>Price: <span style="font-family: Courier New">' + this.price + ' руб.</span></p>' +
            '<p>Weight: <span style="font-family: Courier New">' + this.weight + ' кг.</span></p>' +
            '<p>№: <span style="font-family: Courier New">' + this.sku + '</span></p>' +
            '<p><img src="' + this.photo + '" alt="SAMSUNG UE49MU8000UXRU"></p>' +
            '<p><span style="font-family: Courier New"><a href="' + this.link + '">SAMSUNG UE49MU8000UXRU</a></span></p>';
    }
};

function getProduct(id) {
    product.showCard(id);
}

//3 светофор

var flag = {
    down: 1
};

function changeColors() {

    var red = document.getElementById('red'),
        yellow = document.getElementById('yellow'),
        green = document.getElementById('green');

    if (red.style.visibility === 'hidden' && yellow.style.visibility === 'hidden' && green.style.visibility === 'hidden') {
        red.style.visibility = 'visible';
    } else if (red.style.visibility === 'visible') {
        red.style.visibility = 'hidden';
        yellow.style.visibility = 'visible';
        flag.down = 1;
    } else if (yellow.style.visibility === 'visible' && flag.down === 1) {
        yellow.style.visibility = 'hidden';
        green.style.visibility = 'visible';
    } else if (yellow.style.visibility === 'visible' && flag.down === 0) {
        yellow.style.visibility = 'hidden';
        green.style.visibility = 'hidden';
        red.style.visibility = 'visible';
    } else if (green.style.visibility === 'visible') {
        yellow.style.visibility = 'visible';
        green.style.visibility = 'hidden';
        flag.down = 0;
    }

}

function initColors() {
    setInterval('changeColors()', 2000);
}