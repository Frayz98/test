const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.json([{
        id: 1,
        username: 'test'
    }, {
        id: 2,
        username: "test2"
    }])
});

module.exports = router;