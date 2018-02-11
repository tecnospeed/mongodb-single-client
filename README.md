# mongodb-single-client
A singleton connection from MongoDB MongoClient for Node.js projects.

# Install
`npm i mongodb-single-client --save` or `yarn add mongodb-single-client`

# Usage example
```javascript
const mongo = require('mongodb-single-client')

// starting the connection
mongo.connect({
  url: 'mongodb://localhost:27017',
  database: 'myapp'
}, (error) => {
  if (error) throw error
  startApp()
})

// using the connection
function startApp () {
  mongo('collectionName').insert({
    name: 'enzo',
    email: 'enzo@mail.com'
  })
}
```


