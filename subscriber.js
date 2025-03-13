const { connect } = require("nats");

class Subscriber
{
    #nc;
    #sub;

    async subscribe(channel, callback)
    {
        this.#nc = await connect({ servers: "nats://localhost:4222" });

        console.log(`Subscribed to channel ${channel}...`);
        this.#sub = this.#nc.subscribe(channel);
    
        for await (const msg of this.#sub)
        {
            //console.log(`Received: ${msg.data.toString()}`);
            callback(msg.data.toString());
        }
    }
    
    async unsubscribe()
    {
        await this.#sub.drain();
        await this.#nc.drain();
    }
}

module.exports = Subscriber;