// 1

window.onload = function () {

// 1
    document.getElementById('dgroup').onclick = function(event) {
        var element = event.target;

        while (element !== this) {
            if (element.tagName === 'DIV') {
                switchClr(element);
                return;
            }
        }
    };

    function switchClr(node) {
        if (node.style.backgroundColor === "white" || !node.style.backgroundColor) {
            node.style.backgroundColor = "green";
        } else node.style.backgroundColor = "white"
    }

};


// 2

function createCounter() {

    var i = 0;

    return function () {
        return ++i;
    }
}

var cnt = createCounter();

function count() {
    document.getElementById('countbutton').value = 'Clicked ' + cnt() + ' times';
}