const express = require('express')
const app = express() // notice that the app instance is called `app`, this is very important.

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// no need for `app.listen()` on Deta, we run the app automatically.
module.exports = app; // make sure to export your `app` instance.
