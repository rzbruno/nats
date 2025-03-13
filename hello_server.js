const Server = require("./server");

function on_event()
{
    return "World";
}

const server = new Server("request", "reply", on_event);
server.start();