const publish = require("./publisher");
const Subscriber = require("./subscriber");

function allocate(data)
{
    publish("allocation.reply", `reply ref ${data}`);
}

const sub = new Subscriber();
sub.subscribe("allocation.request", allocate);