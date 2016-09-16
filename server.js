const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 4000;

app.use(express.static(__dirname));
app.use(express.static(__dirname + '/app/dist'));

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'app', 'dist', 'index.html'))
})

app.listen(port, function() {
    console.log('server listening port', port);
})
