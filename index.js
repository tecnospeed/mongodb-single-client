const { MongoClient } = require('mongodb')

let connection

const defaultConnectionConfig = {
  ignoreUndefined: true
}

const getCollection = collectionName =>
  connection.collection(collectionName)

const connect = ({ url, database, connectionConfig = defaultConnectionConfig }, done) =>
  MongoClient.connect(url, connectionConfig, (err, client) => {
    if (err) return done(err)

    connection = client.db(database)

    return done()
  })

module.exports = getCollection
module.exports.connect = connect
