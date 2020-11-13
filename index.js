const express = require('express');
const app = express();

app.use(express.json());


const PORT = 3000;

const server = app.listen(PORT, function() {
    console.log('listenning on port ' + PORT.toString());
});