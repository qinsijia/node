
//配置文件
const Sequelize = require('sequelize');
const sequelize = new Sequelize('travel', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: true,

  pool: {
    max: 20,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // SQLite only
//   storage: 'path/to/database.sqlite'
});

module.exports = sequelize;

// Or you can simply use a connection uri
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');