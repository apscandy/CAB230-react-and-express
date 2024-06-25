import { Knex } from "knex";

const knex: { [key: string]: Knex.Config } = {
    development: {
        client: "mysql2",
        connection: {
            host: process.env.MYSQL_HOST || "127.0.0.1",
            port: parseInt(process.env.MYSQL_PORT || "3306"),
            user: process.env.MYSQL_USER || "root",
            password: process.env.MYSQL_PASSWORD || "Cab230!",
            database: process.env.MYSQL_DATABASE || "volcanoes",
        },
        pool: { min: 1, max: 10 },
    },
    production: {
        client: "mysql2",
        connection: {
            host: process.env.MYSQL_PRODUCTION_HOST,
            port: parseInt(process.env.MYSQL_PRODUCTION_PORT || "3306"),
            user: process.env.MYSQL_PRODUCTION_USER,
            password: process.env.MYSQL_PRODUCTION_PASSWORD,
            database: process.env.MYSQL_PRODUCTION_DATABASE,
        },
        pool: { min: 1, max: 10 },
    }
}

// setting which environment to use 
const knexConfig = knex[process.env.NODE_ENV || 'development'];

export default knexConfig;