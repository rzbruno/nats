const publish = require("./publisher");
const Subscriber = require("./subscriber");

class Server
{
    constructor(request_channel, reply_channel, callback)
    {
        this.request_channel = request_channel;
        this.reply_channel = reply_channel;
        this.callback = callback;
        this.on_request = this.on_request.bind(this);
    }
    
    on_request(input)
    {
        const output = this.callback(input);
        publish(this.reply_channel, `reply ${output} ref ${input}`);
    }

    start()
    {
        const sub = new Subscriber();
        sub.subscribe(this.request_channel, this.on_request);
    }
}

module.exports = Server;