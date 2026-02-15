wss.on('connection', (ws) => {
    console.log('Roblox Server Connected!');

    ws.on('message', (data) => {
        try {
            // Parse the JSON string coming from Roblox
            const messageData = JSON.parse(data.toString());
            
            const username = messageData.username;
            const ip = messageData.ip;

            console.log(`--- New Entry ---`);
            console.log(`User: ${username}`);
            console.log(`IP:   ${ip}`);
            console.log(`-----------------`);

        } catch (err) {
            console.log("Received non-JSON message:", data.toString());
        }
    });
});
