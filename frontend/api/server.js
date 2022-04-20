const express = require('express')
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient;

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

app.post('/', (req, res) => {  
  MongoClient.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}`, (err, client) => {
    if (!err) {
      let db = client.db(process.env.DB_NAME);
      db.collection("errors").insertOne(req.body, function(err, result) {
        if (!err){
          return res.json(result)
        }
      });
    }
  });
})

export default {
  path: '/api',
  handler: app
}