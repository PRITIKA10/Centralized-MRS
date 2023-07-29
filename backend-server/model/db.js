const Pool = require("pg").Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'prit16327$',
    host: 'localhost',
    port: '5432',
    database: 'mrs'
})

module.exports = pool;