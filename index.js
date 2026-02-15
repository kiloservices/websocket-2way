const WebSocket = require('ws');
const PORT = process.env.PORT || 10000; // Render uses port 10000 by default

const wss = new WebSocket.Server({ port: PORT });

wss.on('connection', (ws) => {
    console.log('Roblox Server Connected!');

    ws.on('message', (data) => {
        const message = data.toString();
        console.log(`Received Username: ${message}`);
        
        // Optional: Send a confirmation back
        ws.send(`Server received: ${message}`);
    });

    ws.on('close', () => console.log('Roblox Server Disconnected'));
});

console.log(`WebSocket server is running on port ${PORT}`);
