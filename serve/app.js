let express = require('express')
let app = express()
app.get('/', function(req, res) {
  let { callback } = req.query
  console.log(callback)
  res.send(`${callback}({
      data:[1,2,3,4]
  })`)
})
app.listen(3000)