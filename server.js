const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html', (err) => {
        if (err) {
            console.log(err);
        }
    });
});

app.listen(3000, () => console.log('Server is running on port 3000'));
