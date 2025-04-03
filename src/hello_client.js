async function main()
{
    const Client = require("../driver/client");

    const client = new Client("request", "reply");

    const reply = await client.request("Hello");

    console.log(reply);
}

main();