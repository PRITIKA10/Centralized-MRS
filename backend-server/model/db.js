const Pool = require("pg").Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'siddhi@20',
    host: 'localhost',
    port: '5432',
    database: 'mrs'
})

module.exports = pool;