import { MongoClient } from 'mongodb'
import assert from 'assert'

// Connection URL
const url = 'mongodb+srv://adminuser:Hola1234.@cluster0.3h1po.mongodb.net/'

// Database Name
const dbName = 'nuxt'

// Use connect method to connect to the server
MongoClient.connect(url, {
  useUnifiedTopology: true,
  useNewUrlParser: true
}, function(err, client) {
  assert.equal(null, err)
  console.log('Connected successfully to server')

  const db = client.db(dbName)
  client.close()
})
