const { connect } = require('nats');

async function subscriber() {
  const nc = await connect({ servers: "nats://localhost:4222" });

  const js = nc.jetstream();

  js.subscriber.

  console.log("Subscriber waiting for message...");
  
  for await (const msg of sub) {
    console.log("Received message:", msg.data.toString());
    msg.ack();
    nc.close();
  }
}

subscriber();