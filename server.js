var express = require("express");
var app = express();
const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://127.0.0.1:27017';
; 

// Create a new MongoClient
const client = new MongoClient(uri, { useUnifiedTopology: true });

app.use(express.static(__dirname+'/public'))
// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB
async function connectToMongoDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');

        // Define a route to handle form submissions
        app.post('/submit-form', async (req, res) => {
            const formData = req.body; 

            // Use the MongoDB client to insert data into your collection
            const database = client.db('SIT725');
            const collection = database.collection('SIT725w4');

            try {
                const result = await collection.insertOne(formData);
                console.log('Document inserted:', result.insertedId);
                res.send('Form submitted successfully');
            } catch (err) {
                console.error('Error inserting document:', err);
                res.status(500).send('Internal Server Error');
            }
        });

    } finally {
        // await client.close();
    }
}

// Call the function to connect
connectToMongoDB();


var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("App listening to port: " + port);
});

