import { handlerWrapper } from 'lib/utils'
import { AWSTypes } from 'lib/types'
import { registerUserSchema } from './validators'
import { HttpError, R } from 'lib/utils'
import UserModel from 'lib/models/users.model';


type Query = {
    sampleUUID: string
}

const registerLambda: AWSTypes.LambdaLogic<Query> = async event => {
    // const { sampleUUID } = queryStringParameters;
    let sampleUUID = 'mynkmk5';
    // todo: add jest tests

    //herre set logic function like cretae database
    let user = {
        email: 'mynkccsdvfbgmdck5@gmail.com',
        password: 'mynk.mk5',
        mobile: "+918238692485"
      }

      let data = await UserModel.create(user);
      return data;
}

export const registerUser = handlerWrapper<Query>(registerLambda,registerUserSchema);


const getUserListLambda: AWSTypes.LambdaLogic<Query> = async (event:any) => {
  console.log('cvfvf0');
      let data = await UserModel.findAll({});
      let res = {users:data,message:'result'}
      return res;
}

export const getUserList = handlerWrapper<Query>(getUserListLambda);
