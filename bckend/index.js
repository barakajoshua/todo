const express = require('express')
const app = express()
const routes = require('./routes/router')
const mongoose = require('mongoose')
const route = require('./routes/router')
app.use(route)


try {
       const connection = mongoose.connect('mongodb://localhost:27017/todo/mytodo')
       if(connection){
              console.log("connected successfully")
       }
} catch (error) {
       
}

app.listen(5000,(req,res) =>{
       console.log('server running on port http://localhost:5000')
})