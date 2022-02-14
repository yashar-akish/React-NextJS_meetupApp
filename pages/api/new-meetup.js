
import { MongoClient } from 'mongodb';

const url = 'mongodb+srv:';

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(url);

    const db = client.db();

    const meetupCollection = db.collection('meetups');

    const result = await meetupCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({message: 'meetup inserted'});
  }
}

export default handler;