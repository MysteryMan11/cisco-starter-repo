import React, {useEffect, useState} from 'react';

const LatencyMeter = () => {
    const [latency, setLatency] = useState('Connecting...');

    useEffect(() => {
        const websocket = new WebSocket('ws://localhost:55455');

        websocket.onopen = () => {
            setLatency('Connected, waiting for packets...');
        };

        websocket.onmessage = (event) => {
            const packetTime = parseInt(event.data, 10); // Parsing the string to a number
            const currentTime = new Date().getTime();
            const calculatedLatency = currentTime - packetTime;
            setLatency(`Latency: ${calculatedLatency} ms`);
        };

        websocket.onerror = (error) => {
            setLatency('WebSocket Error');
        };

        websocket.onclose = () => {
            setLatency('WebSocket Closed');
        };

        return () => {
            if (websocket) {
                websocket.close();
            }
        };
    }, []);

    return (
        <div>
            <h3>Packet Latency from Pylon</h3>
            <p>{latency}</p>
        </div>
    );
};

export default LatencyMeter;
