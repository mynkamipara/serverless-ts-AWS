import { ENVS, STAGES } from 'lib/common'

const isDev = String(ENVS.STAGE).toLowerCase() === String(STAGES.DEV).toLowerCase()

const DBConfig = {
    connection:{
        host:"35.154.85.177",
        user:'edexa',
        password:'3d3Xa',
        database:'evoting',
    },
    dialect: "postgres",
    // debug:
    pool:{
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
}

export {
   DBConfig
}
