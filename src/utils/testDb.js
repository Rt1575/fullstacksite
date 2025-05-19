import { MongoClient } from 'mongodb';

async function testConnection() {
  const client = new MongoClient('mongodb://localhost:27017');

  try {
    await client.connect();
    console.log('Successfully connected to MongoDB!');
    
    const db = client.db('mind_mosaic');
    const collections = await db.listCollections().toArray();
    console.log('Available collections:', collections.map(c => c.name));
    
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  } finally {
    await client.close();
  }
}

testConnection(); 