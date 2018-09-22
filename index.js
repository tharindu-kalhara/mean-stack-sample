const express = require('express');
const mongoose = require('mongoose');

const user = require('./routes/api/user');
const profile = require('./routes/api/profile');
const post = require('./routes/api/post');

const app = express();
const db = require('./config/key').mongoURL;

mongoose
    .connect(db).then(() =>
    console.log('mongo db connected'))
    .catch((err) =>
        console.error('err > ' + err)
    );
app.get('/', (req, res) => {
    console.log('hi');
    res.send('hi hisss>>>>>>>>>');
});

// routes
app.use('/api/user', user);
app.use('/api/profile', profile);
app.use('/api/post', post);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`running port on ${port}`);
})