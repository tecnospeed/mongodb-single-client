const MongoClient = require('mongodb').MongoClient

var connection

const connectionConfig = {
  ignoreUndefined: true
}

module.exports = (collectionName) => connection.collection(collectionName)

module.exports.connect = (callback) => {
  MongoClient.connect(process.env.MONGODB_URL, connectionConfig, (err, client) => {
    if (err) return callback(err)
    connection = client.db('ReinfDB')
    return callback()
  })
}
