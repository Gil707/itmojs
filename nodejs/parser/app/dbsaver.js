let assert = require('assert');
let mongo = require('mongodb').MongoClient;
let mysql = require('mysql');

let globalI = {i: 3};

const url = 'mongodb://localhost:27017/';
const dbName = 'ceramo';
const items = 'items';
const fullUrl = url + dbName;

let mysql_connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});


function saveToMySQL(item) {

    let query = "INSERT INTO `oc_product` (`product_id`,`sku`" +
        ",`location`,`model`,`image`,`shipping`,`price`) " +
        "VALUES (" + globalI.i + "," + item.sku + "," + "'" + item.country + "'" + "," +
        "'" + item.name + "'" + "," + "'" + item.img + "'" + ", 'yes' , " + item.price + ")";

    mysql_connection.query(query, function (error, results, fields) {
        if (error) throw error;
        console.log(item.name + ' added to MySQL');
    });

    globalI.i++;
}


function saveToMongo(item) {
    mongo.connect(fullUrl, function (err, client) {
        assert.equal(null, err);

        const db = client.db(dbName);

        db.collection(items).insertOne(item, function (err, res) {
            assert.equal(null, err);
            console.log('Item ' + item.name + ' added to MongoDB.');
            client.close();
        });
    });

    globalI.i++;
}

module.exports = {
    saveToMySQL: saveToMySQL,
    saveToMongo: saveToMongo
};