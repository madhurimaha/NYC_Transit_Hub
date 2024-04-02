const express = require('express');
const protobuf = require('protobufjs');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;

const MTA_FEED_URL = 'https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-g';
const GTFS_PROTO_PATH = 'gtfs-realtime-NYCT.proto';

protobuf.load(GTFS_PROTO_PATH, function(err, root) {
    if (err) {
        console.error('Failed to load Protobuf definitions:', err);
        process.exit(1); // Exit the process if protobuf loading fails
    }

    const FeedMessage = root.lookupType('transit_realtime.FeedMessage');

    app.get('/transit-data', async (req, res) => {
        try {
            const response = await fetch(MTA_FEED_URL);
            if (!response.ok) {
                throw new Error('Failed to fetch MTA data: ' + response.statusText);
            }
            const buffer = await response.arrayBuffer();
            const feed = FeedMessage.decode(new Uint8Array(buffer));
            res.json(feed);
        } catch (error) {
            console.error('Error processing request:', error);
            res.status(500).json({ error: 'Internal Server Error', message: error.message });
        }
    });
});

app.get('/', (req, res) => {
    res.send('MTA NYC Transit Hub Application is running. Access /transit-data to fetch real-time transit data.');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
