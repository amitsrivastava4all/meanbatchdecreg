const Sequelize = require("sequelize");
const dbConfig = require("../utils/config").dbConfig;
const seq  = new Sequelize(dbConfig.dbName,dbConfig.userid,dbConfig.password,{dialect:dbConfig.dialect,host:dbConfig.hostName, port: dbConfig.portNumber,pool: {
    max: dbConfig.poolSize,
    idle: 30000,
    acquire: 60000,
  }});

  seq.authenticate().then(()=>{
      console.log("Connection Created...");
  }).catch(err=>{
      console.log("Error in DB Connecton ",err);
  })

  module.exports = seq;