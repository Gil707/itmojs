let ceramoParser = require('./app/parse_func');

ceramoParser.getLinksCompany(function (links) {
    links.forEach(function (item, i, arr) {
        setTimeout(function () {
            ceramoParser.getColsGroups(item, function (groups) {
                groups.forEach(function (item, i, arr) {
                    setTimeout(function () {
                        ceramoParser.getGroupItems(item, function (items) {
                            items.forEach(function (item, i, arr) {
                                setTimeout(function () {
                                    ceramoParser.getItem(item);
                                }, 3000 * i);
                            });
                        })
                    }, 6000 * i)
                });
            });
        }, 40000 * i)
    })
});
