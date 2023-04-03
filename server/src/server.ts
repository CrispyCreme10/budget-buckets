import express from 'express';
import { router as userRoutes } from './routes/users.route'
import { config } from "./utils/env";

const app = express();
const port = config.port;

// middleware


// routes
app.use('/users', userRoutes)

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
})