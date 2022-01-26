const express = require('express')
const app = express()

app.get('/', (_, res) => {
  res.send('hello world')
})

const port = process.ENV.PORT || 3000
app.listen(port)
