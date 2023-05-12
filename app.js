const express = require('express');
const session = require('cookie-session');
const { PORT, SERVER_SESSION_SECRET } = require('./config.js');
const app = express();

// app.get('/', (req, res) => {
//     res.json({
//         "statusCode": 200,
//         "status": "SUCCESS",
//         "message": "Server is up and running...    YOU ARE ON HOME PAGE '/' "
//     })
// });

app.get('/getData', (req, res) => {
    res.json({
        "statusCode": 200,
        "status": "SUCCESS",
        "message": "There is no data yet..."
    })
});

app.use(session({ secret: SERVER_SESSION_SECRET, maxAge: 24 * 60 * 60 * 1000 }));
app.use('/api/auth', require('./routes/auth.js'));
app.use('/api/hubs', require('./routes/hubs.js'));
app.listen(PORT, (req, res) => {
    console.log(`API running at http://localhost:${PORT}"`);
})


