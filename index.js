const WebSocket = require('ws');

// Use Render's port or default to 10000
const PORT = process.env.PORT || 10000;

// This is the part that was missing or breaking:
const wss = new WebSocket.Server({ port: PORT });

wss.on('connection', (ws) => {
    console.log('Roblox Server Connected!');

    ws.on('message', (data) => {
        try {
            // Parse the JSON coming from Roblox (Username + IP)
            const messageData = JSON.parse(data.toString());
            
            console.log(`--- New Entry ---`);
            console.log(`User: ${messageData.username}`);
            console.log(`IP:   ${messageData.ip}`);
            console.log(`-----------------`);

        } catch (err) {
            // If it's not JSON, just print the raw text
            console.log("Received:", data.toString());
        }
    });

    ws.on('close', () => console.log('Roblox Server Disconnected'));
});

console.log(`WebSocket server is running on port ${PORT}`);
