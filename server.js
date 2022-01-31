const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.post('/quotes', (req,res) => {
  res.send(req.body)
}
)

app.get('/', (req,res) => {
  res.sendFile(_dirname + './index.html')
})

const PORT = 3000;

app.listen(PORT,() =>{
  console.log(`server running at port ${PORT}`)
}
)