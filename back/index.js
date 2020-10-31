const express = require('express');
const http = require('http');
const cors = require('cors')
const port = 3000;
const app = express();

app.use(cors());

const characterRouter = require('./routes/characterRouter');
app.use('/character', characterRouter);


app.listen(port, () => {
  console.log(`Server on, at port ${port}`)
})  