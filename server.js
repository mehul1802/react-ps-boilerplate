//Install express server
const express = require('express');
const app = express();
const path = __dirname + '/build';
// Serve only the static files form the dist directory
app.use(express.static(path));

app.get('*', function(req, res) {
    res.sendFile(path + '/index.html');
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
