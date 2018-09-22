const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
    res.json({
        msg: "profile test is woriking"
    });
}, (err) => {
    console.log(err);
});

module.exports = router;
