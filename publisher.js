const { connect } = require("nats");

async function publish(channel, msg)
{
    const nc = await connect({ servers: "nats://localhost:4222" });

    //console.log(`Publishing ${msg}`);
    nc.publish(channel, Buffer.from(msg));

    await nc.drain();
}

module.exports = publish;