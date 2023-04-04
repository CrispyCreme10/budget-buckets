import express from 'express';
import { User } from '../models/users';
import { addUser, getUser } from '../db/mongo';
import bodyParser from 'body-parser';
export const router = express.Router();

const dateFormat: Intl.DateTimeFormatOptions = {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
}

const jsonParser = bodyParser.json();

router.use(jsonParser, (req, res, next) => {
    console.log('Time: ', new Date().toLocaleString('en-us', dateFormat));
    console.log('Headers: ', req.headers);
    console.log('Params: ', req.params);
    console.log('Body: ', req.body);
    next();
});

router.get('/:id', jsonParser, async (req, res) => {
    const id: string = req.params.id;
    const user: User = await getUser(id);

    if (!user) {
        res.sendStatus(404);
        return;
    }
    res.json(user);
});

router.post('/', jsonParser, async (req, res) => {
    try {
        const newUser = req.body as User;
        console.log('New User: ', newUser);
        let success = false;
        let reason = '';
        if (newUser) {
            [success, reason] = await addUser(newUser);
            if (!success)
                console.log(reason); // LOG
            res.sendStatus(201);
            return;
        }
    } catch (error) {
        // LOG
        console.log(error);
    }

    res.sendStatus(400);
});