async function main()
{
    const Client = require("./client");

    const client = new Client("request", "reply");

    const reply = await client.request("Hello");

    console.log(reply);
}

main();