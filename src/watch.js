const Subscriber = require("../driver/subscriber");

function print(msg)
{
    console.log(msg)
}

const subscriber = new Subscriber()
subscriber.subscribe("test", print)