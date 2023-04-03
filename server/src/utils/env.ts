import dotenv from 'dotenv';
dotenv.config();

export const config = {
    env: process.env.ENV,
    port: process.env.PORT,
    db: {
        dev_conn: process.env.MONGO_DB_DEV_CONN
    }
}