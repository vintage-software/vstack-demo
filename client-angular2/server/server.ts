import express = require('express');
import path = require('path');
let port: number = process.env.PORT || 3000;
let app = express();

app.use('/app', express.static(path.resolve(__dirname, 'app')));
app.use('/assets', express.static(path.resolve(__dirname, 'assets')));

let renderIndex = (req: express.Request, res: express.Response) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
};

app.get('/*', renderIndex);

app.listen(port, function() {
    console.log('This express app is listening on port:' + port);
});
