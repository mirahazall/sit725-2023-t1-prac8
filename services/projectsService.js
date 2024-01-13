const { MongoClient } = require('mongodb');

class ProjectsService {
    constructor(uri) {
        this.client = new MongoClient(uri, { useUnifiedTopology: true });
    }

    async connect() {
        try {
            await this.client.connect();
            console.log('Connected to MongoDB');
        } catch (error) {
            console.error('Error connecting to MongoDB:', error);
        }
    }

    async submitForm(formData) {
        console.log('Received form data:', formData);
    
        const database = this.client.db('SIT725');
        const collection = database.collection('SIT725w4');
    
        try {
            console.log('Before insertOne');
            const result = await collection.insertOne(formData);
            console.log('Document inserted:', result.insertedId);
            return { success: true, message: 'Form submitted successfully' };
        } catch (err) {
            console.error('Error inserting document:', err);
            return { success: false, message: 'Internal Server Error' };
        }
    }
    
    

    async closeConnection() {
        await this.client.close();
    }
}

module.exports = ProjectsService;
