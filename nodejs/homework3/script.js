function loadBTCCourses() {
    $.getJSON("https://blockchain.info/ticker", function (data) {

        let items = [];
        let date = new Date($.now());
        items.push("<span class='time_head'>Last refresh in " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "</span>");
        items.push("<ul>");

        $.each(data, function (key, val) {
            items.push("<li class='itm_val'>" + key + "/BTC : " + val['last'] + "</li>");
        });
        items.push("<ul/>");

        $("#courses").html(items);

    });
}

function loadBTCLocalCourse() {
    $.getJSON("http://localhost:8000/courses.json", function (data) {

        let items = [];
        items.push("<ul>");

        $.each(data, function (key, val) {
            items.push("<li class='loc_val'>" + key + " : " + val + "</li>");
        });
        items.push("<ul/>");

        $("#local_crs").html(items);

    });
}

loadBTCCourses();
loadBTCLocalCourse();

setInterval(function () {
    loadBTCCourses();
    loadBTCLocalCourse();
}, 5000);