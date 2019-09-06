vertx.createHttpServer().requestHandler(function (request) {
    request.response().end("Hello World");
}).listen(8080);
