# requirements
npm install

podman run --rm -d --name nats-server -p 4222:4222 nats:latest

# one tab
node task_server.js

# other tab
node task_client.js