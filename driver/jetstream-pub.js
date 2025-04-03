const { connect } = require('nats');

async function publisher() {
  const nc = await connect({ servers: "nats://localhost:4222" });

  const js = nc.jetstream();

  console.log("Publisher sending message...");
  await js.publish("hello", Buffer.from("Hello, NATS World with JetStream!"));

  nc.close();
}

publisher();