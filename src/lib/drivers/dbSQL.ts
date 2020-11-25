import {DBConfig} from 'lib/config';
import {
  Sequelize
} from "sequelize";

export const sequelizeDBClientInit = new Sequelize(DBConfig.connection.database, DBConfig.connection.user, DBConfig.connection.password, {
    host: DBConfig.connection.host,
    dialect: "postgres",
  
    pool: {
      max: DBConfig.pool.max,
      min: DBConfig.pool.min,
      acquire: DBConfig.pool.acquire,
      idle: DBConfig.pool.idle
    }
  });
  sequelizeDBClientInit.sync();
  sequelizeDBClientInit.authenticate();