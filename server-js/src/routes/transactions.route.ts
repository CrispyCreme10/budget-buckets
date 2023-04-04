import express from 'express';
export const router = express.Router();

router.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
});

router.get('/', (req, res) => {
    res.send(JSON.stringify(
        [
            {
                date: Date.now(),
                desc: 'Test Transaction',
                category: 'Gas',
                amount: -37.54
            },
            {
                date: Date.now(),
                desc: 'Test Transaction',
                category: 'Gas',
                amount: -37.54
            }
        ]
    ));
});

router.get('/:id', (req, res) => {
    res.send(JSON.stringify({
        date: Date.now(),
        desc: 'Test Transaction',
        category: 'Gas',
        amount: -37.54
    }));
});