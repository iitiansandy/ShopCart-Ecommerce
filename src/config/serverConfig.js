const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    port: process.env.PORT,
    // mongoDbUri: process.env.MONGO_DB_URL,
    dbHost: process.env.DB_HOST,
    user: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbName: process.env.DB_DATABASE
}