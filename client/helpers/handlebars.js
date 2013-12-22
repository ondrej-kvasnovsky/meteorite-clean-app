Handlebars.registerHelper("prettifyDate", function (timestamp) {
    var d = new Date(timestamp);
    return [d.getDate(), d.getMonth() + 1, d.getFullYear()].join('/');
});