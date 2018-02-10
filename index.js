const { MongoClient } = require('mongodb')

const URLConnection = process.env.MONGODB_URL
const Database = process.env.MONGODB_DATABASE

var connection

const connectionConfig = {
  ignoreUndefined: true
}

module.exports = collectionName => connection.collection(collectionName)

module.exports.connect = callback =>
  MongoClient.connect(URLConnection, connectionConfig, (err, client) => {
    if (err) return callback(err)

    connection = client.db(Database)

    return callback()
  })
