// app.js
// include packages and define server related variables
const express = require('express')
const exhbs = require('express-handlebars')
const bodyParser = require('body-parser')
const trashTalk = require('./trashtalk.js')
const app = express()
const port = 3000

// setting template engine
app.engine('handlebars', exhbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// setting routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const trash = trashTalk(req.body)
  const option = new Object();
  option[req.body.opt] = req.body.opt
  res.render("index", { trash: trash, option: option });
})

// starts the express server and listening for connections.
app.listen(port, () => {
  console.log(`Express app listening on http://localhost:${port}`)
})