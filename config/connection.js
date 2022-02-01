const client = require('mongodb').MongoClient;

const state = {
    db: null
}
module.exports.connect = function (callback) {
    const uri = 'mongodb://localhost:27017'
    const dbname = 'portfolio'
    client.connect(uri, (err, data) => {
        if (err) return callback(err)
        state.db = data.db(dbname)
        callback()
    })


}

 
module.exports.get = function () {
    return state.db;
}

