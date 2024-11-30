const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    port: process.env.PORT,
    // mongoDbUri: process.env.MONGO_DB_URL,
    dbHost: process.env.DB_HOST,
    user: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbName: process.env.DB_DATABASE,
    dbAlter: process.env.DB_ALTER,
    dbForce: process.env.DB_FORCE,
    saltRounds: process.env.SALT_ROUNDS,
    jwtSecret: process.env.JWT_SECRET,
    jwtExpiry: process.env.JWT_EXPIRY,
    nodeEnv: process.env.NODE_ENV
}