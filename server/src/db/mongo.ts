import { Collection, Db, FindCursor, InsertOneResult, MongoClient, WithId } from "mongodb";
import { User } from "../models/users";
import { config } from "../utils/env";

const client = new MongoClient(config.db.dev_conn);

async function getUserCollection(): Promise<[Db, Collection<User>]> {
    const db = client.db("cash_flow_genie");
    return [db, db.collection<User>("users")];
}

export async function getUsers(): Promise<User[]> {
    const resultUsers: User[] = [];
    try {
        const [db, users] = await getUserCollection();
        const findCursor: FindCursor<WithId<User>> = await users.find();
        console.log(findCursor.toArray());
    } catch (error) {
        console.log('Mongo getUsers error: ', error);
    } finally {
        await client.close();
    }

    return resultUsers;
}

export async function getUser(id: string): Promise<User> {
    let user: User;
    try {
        const [db, users] = await getUserCollection();
        const query = { id };
        user = await users.findOne(query);
        console.log(user);
    } catch (error) {
        // LOG
        console.log('Mongo getUser error: ', error);
    } finally {
        await client.close();
    }

    return user;
}

export async function addUser(user: User): Promise<boolean> {
    let result: InsertOneResult;
    try {
        const [db, users] = await getUserCollection();
        
        result = await users.insertOne(user);
        console.log(result);
    } catch (error) {
        // LOG
        console.log('Mongo addUser error: ', error);
    } finally {
        await client.close()
    }

    return result.acknowledged;
}
