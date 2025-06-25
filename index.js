const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const name = "Michael Gemmink";

app.get('/', (req, res) => {
    let output = name + " - WEB322 " + new Date().toISOString();
    res.send(output);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
