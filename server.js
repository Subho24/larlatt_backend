const express = require('express');

const app = express();

const PORT = process.env.PORT || 4000


app.use('/text', require('./routes/textApiCalls'));
app.use('/images', require('./routes/imageApiCalls'));


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));