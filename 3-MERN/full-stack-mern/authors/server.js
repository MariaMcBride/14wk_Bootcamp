const express = require('express');
const cors = require('cors');

const app = express();
const port = 8000;
const db_name = 'authors';

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./server/config/mongoose.config')(db_name);
require('./server/routes/author.routes')(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));