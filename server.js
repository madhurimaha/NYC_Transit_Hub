const express = require('express');
const fetch = require('node-fetch');
const protobuf = require('protobufjs');

const app = express();
const PORT = process.env.PORT || 3000;



// URL for the real-time data feed (substitute with the specific feed URL you need)
const MTA_FEED_URL = 'https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-g';

// Protobuf definitions for GTFS (replace with the path to your .proto files)
const GTFS_PROTO_PATH = 'gtfs-realtime-NYCT.proto';

protobuf.load(GTFS_PROTO_PATH, function(err, root) {
    if (err) throw err;

    const FeedMessage = root.lookupType('transit_realtime.FeedMessage');

    app.get('/transit-data', async (req, res) => {
        try {
            const response = await fetch(MTA_FEED_URL);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const buffer = await response.arrayBuffer();
            const feed = FeedMessage.decode(new Uint8Array(buffer));
            res.json(feed); // Send the decoded feed as JSON
        } catch (error) {
            console.error('Failed to fetch MTA data:', error);
            res.status(500).send('Failed to fetch transit data');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
