const router = require('express').Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });
    try {
        const savedUser = await newUser.save();
        res.send(savedUser);
    }
    catch (err) {
        console.log(err);
        res.status(400).send("Ooops error happened!");
    }

})


module.exports = router;