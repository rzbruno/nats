const publish = require("./publisher");
const Subscriber = require("./subscriber");

class Client
{
    #request_channel;
    #reply_channel;

    constructor(request_channel, reply_channel)
    {
        this.#request_channel = request_channel;
        this.#reply_channel = reply_channel;
    }
   
    async request(input)
    {
        return new Promise((resolve) => {
            const sub = new Subscriber();
    
            sub.subscribe(this.#reply_channel, (msg) => {
                sub.unsubscribe();
                resolve(msg);
            });
    
            publish(this.#request_channel, input);
        });
    }
}

module.exports = Client;