/**
 * import necessary module
 */
var http = require("http");
var url = require("url");

function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        route(pathname, handle, response);
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server starting at http://localhost:8888");
}
exports.start = start;