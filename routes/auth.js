const router = require('express').Router();
const User = require('../models/User');
const { registerValidation } = require('../validation');
const bcrypt = require('bcryptjs');


router.post('/register', async (req, res) => {

    // validate the data before creating new user
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Check if the user is already in the database
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) return res.status(400).send('Email already exists');

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create a new user
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
    });
    try {
        const savedUser = await newUser.save();
        res.status(200).send({
            user: newUser.id,
            message: "Success"
        });
    }
    catch (err) {
        console.log(err);
        res.status(400).send("Ooops error happened!");
    }

});


module.exports = router;