vertx.createHttpServer().requestHandler(function (request) {
    request.response().end("Hello Jio World");
}).listen(8080);
