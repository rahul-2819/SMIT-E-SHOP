const express = require('express')
const app = express()
const port = 5000
const mongoDB  = require('./db');
mongoDB();
app.get('/', (req, res) => {
  res.send('Hello Worldhi!')
})
app.use(express.json())
app.use('/api',require('./routes/CreateUser'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
