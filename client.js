const publish = require("./publisher");
const Subscriber = require("./subscriber");

const sub = new Subscriber()

sub.subscribe("allocation.reply", (msg) => {
    console.log(msg);
    sub.unsubscribe();
});

publish("allocation.request", `request ${Date.now()}`);