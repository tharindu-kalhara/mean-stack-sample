const express = require('express');
const router = express.Router();

// @router GET /api/user/test
router.get('/test', (req, res) => {
    res.json({
        msg: "user test is woriking"
    });
}, (err) => {
    console.log(err);
});

module.exports = router;