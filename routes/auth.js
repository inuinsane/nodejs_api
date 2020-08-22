const router = require('express').Router();
const User = require('../models/User');


// Validation
const Joi = require('@hapi/joi');

const schema = Joi.object({
    name: Joi.string()
        .min(6)
        .required(),
    email: Joi.string()
        .min(6)
        .required()
        .email(),
    password: Joi.string()
        .min(6)
        .required(),
});

router.post('/register', async (req, res) => {

    // validate the data before creating new user
    const validation = await schema.validate(req.body);
    res.send(validation);


    // const newUser = new User({
    //     name: req.body.name,
    //     email: req.body.email,
    //     password: req.body.password,
    // });
    // try {
    //     const savedUser = await newUser.save();
    //     res.send(savedUser);
    // }
    // catch (err) {
    //     console.log(err);
    //     res.status(400).send("Ooops error happened!");
    // }

});


module.exports = router;