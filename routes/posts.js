const router = require('express').Router();
const verify = require('./verifyToken');
const User = require('../models/User');

router.get('/', verify, async (req, res) => {
    const id = req.user._id;
    const currentUser = await User.findOne({ _id: id });
    if (currentUser) return res.send(currentUser);

})

module.exports = router;