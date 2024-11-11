const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    port: process.env.PORT,
    mongoDbUri: process.env.MONGO_DB_URL || 4001
}