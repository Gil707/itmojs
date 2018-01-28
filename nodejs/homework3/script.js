function loadBTCCourses() {
    $.getJSON("https://blockchain.info/ticker", function (data) {

        let items = [];
        let date = new Date($.now());
        items.push("<span class='time_head'>Last refresh in " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "</span>");
        items.push("<ul>");

        $.each(data, function (key, val) {
            console.dir(key + ' - ' + val);
            items.push("<li class='itm_val'>" + key + "/BTC : " + val['last'] + "</li>");
        });
        items.push("<ul/>");

        $("#courses").html(items);

    });
}

loadBTCCourses();

setInterval(function () {
    loadBTCCourses()
}, 5000);