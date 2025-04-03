const publish = require("./publisher");
const Subscriber = require("./subscriber");

class Server
{
    constructor(request_channel, reply_channel, callback)
    {
        this.request_channel = request_channel;
        this.reply_channel = reply_channel;
        this.callback = callback;
    }
    
    on_request(input)
    {
        const output = this.callback(input);
        publish(this.reply_channel, `reply ${output} ref ${input}`);
    }

    start()
    {
        const sub = new Subscriber();
        sub.subscribe(this.request_channel, (input) => this.on_request(input));
    }
}

module.exports = Server;