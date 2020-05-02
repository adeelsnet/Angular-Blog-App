const express = require('express');
const app = express();

// app.use((req, res, next) => {

//     next();
// });

app.get('/api/posts', (re, res, next) => {

    const posts = [{
            title: 'Post-1',
            body: 'Post-1 content',
            date: new Date()
        },
        {
            title: 'Post-2',
            body: 'Post-2 content',
            date: new Date()
        }
    ];
    res.status(200).json({
        message: 'Posts fecthed succesfully',
        posts: posts
    });

});

module.exports = app;