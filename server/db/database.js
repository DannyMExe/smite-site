const Sequelize = require('sequelize');
const db = new Sequelize(
    process.env.DATABASE_URL ||
    'postgres://localhost:5432/smite-site', {
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false
          }
        }
      }
    );

module.exports = db;

//do not touch!!!