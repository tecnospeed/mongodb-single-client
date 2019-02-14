const { MongoClient } = require('mongodb')

const URLConnection = process.env.MONGODB_URL
const Database = process.env.MONGODB_DATABASE
const AppName = process.env.MONGODB_APPNAME

let connection

const defaultConnectionConfig = {
  ignoreUndefined: true,
  useNewUrlParser: true,
  appname: AppName || Database
}

const getCollection = collectionName => connection.collection(collectionName)

const connect = (
  { url = URLConnection, database = Database, connectionConfig = defaultConnectionConfig },
  done
) =>
  MongoClient.connect(url, connectionConfig, (err, client) => {
    if (err) return done(err)

    connection = client.db(database)

    return done()
  })

module.exports = getCollection
module.exports.connect = connect
