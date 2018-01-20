window.onload = function () {
    addEventListener('click', checkClick, false);
    document.getElementById('glass').style.top = -getRandomInt(150, 161) + 'px';
};

var username = prompt('Enter your name');
document.getElementById('player').innerText = (username) ? username : 'Player';

var costsWeight = {
    'pc10c': '1',
    'pc20c': '2',
    'pc50c': '5',
    'pc1e': '10',
    'pc2e': '20',
    'pl10c': '1',
    'pl20c': '2',
    'pl50c': '5',
    'pl1e': '10',
    'pl2e': '20'
};

function computerLoop() {

    var cur_di = parseInt(document.getElementById('glass').style.top);
    var pc_log = document.getElementById('pc_log');
    console.log(cur_di);

    if (cur_di <= 0) {
        if (cur_di < -40) {
            minusPcCoin('pc2e');
            gameLoop('pl2e');
            pc_log.innerHTML = 'PC dropped 2 EUR';
        } else if (cur_di >= -40 && cur_di < -20) {
            minusPcCoin('pc1e');
            gameLoop('pl1e');
            pc_log.innerHTML = 'PC dropped 1 EUR';
        } else if (cur_di >= -20 && cur_di < -10) {
            minusPcCoin('pc50c');
            gameLoop('pl50c');
            pc_log.innerHTML = 'PC dropped 50 CENT';
        } else if (cur_di >= -10 && cur_di < -5) {
            minusPcCoin('pc20c');
            gameLoop('pl20c');
            pc_log.innerHTML = 'PC dropped 20 CENT';
        } else if (cur_di == -5) {
            minusPcCoin('pc50c');
            gameLoop('pl50c');
            pc_log.innerHTML = 'PC dropped 50 CENT';
        } else if (cur_di == -1) {
            minusPcCoin('pc10c');
            gameLoop('pl10c');
            pc_log.innerHTML = 'PC dropped 10 CENT';
        } else if ((cur_di > -5 && cur_di <= 3) || cur_di == -2) {
            minusPcCoin('pc20c');
            gameLoop('pl20c');
            pc_log.innerHTML = 'PC dropped 50 CENT';
        } else if (cur_di == 0) {
            minusPcCoin('pc2e');
            gameLoop('pl2e');
            pc_log.innerHTML = 'PC dropped 2 EUR';
        }

        checkFill('Computer');
    }

}

function gameLoop(coin_id) {
    dropCoin(coin_id);
    pullDown(costsWeight[coin_id]);
}

function minusPcCoin(coin_id) {
    var amount = document.getElementById(coin_id);
    if (parseInt(amount.innerHTML) > 0) {
        amount.innerHTML = parseInt(amount.innerHTML) - 1;
    } else {
        computerLoop();
    }
}

function checkClick(e) {

    if (e.target.tagName === 'SPAN') {
        var amount = document.getElementById(e.target.id),
            error = document.getElementById('am_error');
        if (parseInt(amount.innerHTML) > 0) {
            error.style.display = 'none';
            gameLoop(e.target.id);
            amount.innerHTML = parseInt(amount.innerHTML) - 1;
            checkFill(username);

            setTimeout(function () {
                computerLoop();
            }, 1000);

        } else {
            error.style.display = 'block';
        }
    }
}

function dropCoin(coin_id) {
    var glass = document.getElementById('glass');
    var coins = glass.getElementsByTagName('div');
    var bottomLine;

    var nDiv = document.createElement('div');
    nDiv.className = coin_id + '_coin';
    if (coins[0] === undefined) {
        bottomLine = 392;
    } else {
        bottomLine = coins[0].offsetTop - 8;
    }
    // nDiv.style.top = bottomLine + 'px';
    nDiv.style.top = '-300px';
    nDiv.style.visibility = 'hidden';
    // nDiv.style.position = 'absolute';
    nDiv.id = coin_id + '_id';
    nDiv.style.marginLeft = getRandomInt(10, 20) + '%';
    glass.insertBefore(nDiv, coins[0]);
    fallingCoin(coin_id + '_id', -300, bottomLine);

}

function fallingCoin(div, min, max) {
    var idiv = document.getElementById(div);
    idiv.style.visibility = 'visible';
    for (var i = min; i < max; i++) {
        setTimeout(function () {
            idiv.style.top = (parseInt(idiv.style.top)+1) +'px';
        }, 100);
    }
}

function pullDown(value) {
        glass.style.top = (parseInt(glass.style.top) + parseInt(value)) + 'px';
}

function getFill(obj) {
    return parseInt(obj.style.top) > 0;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function checkFill(name) {
    if (getFill(glass)) {
        glass.style.backgroundColor = 'lightblue';
        glass.style.borderBottomColor = '#888888';
        glass.style.borderLeftColor = '#888888';
        glass.style.borderRightColor = '#888888';
        while (parseInt(glass.style.top) < 48) {
            glass.style.top = (parseInt(glass.style.top) + 1) + 'px';
        }
        window.removeEventListener('click', checkClick, false);

        var finish = document.getElementById('finish');
        finish.innerHTML = ((name) ? name : 'Player') + ' fails!';
        finish.style.opacity = '1';
    }
}

