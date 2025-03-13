# description
playing around with the concept of client/server over pub/sub using nats

# requirements
npm install

podman run --rm -d --name nats-server -p 4222:4222 nats:latest

# one tab
node hello_server.js

# other tab
node hello_client.js