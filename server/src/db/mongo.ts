import { MongoClient } from 'mongodb'

const uri = process.env.MONGO_DB_DEV_CONN
const client = new MongoClient(uri);

export async function getUser(id: string) {
    try {
        const db = client.db('cash_flow_genie');
        const users = db.collection('users');
    
        const query = { id: id };
        const user = await users.findOne(query);
    
        console.log(user);

        return user;
    } finally {
        await client.close();
    }
}