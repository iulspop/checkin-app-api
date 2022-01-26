const express = require('express')
const app = express()

app.get('/', (_, res) => {
  res.send('hello world')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Node server listening on port ${port}!`)
})
