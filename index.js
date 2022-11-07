const express = require('express');

const cors = require('cors');

const app = express();
const port = 5000 || process.env.PORT;

app.use(cors());

app.get('/', (req, res) => {
    res.send('server is up');
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
