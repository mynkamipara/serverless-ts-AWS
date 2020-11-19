import { SampleOperations } from 'lib/operations'
import { handlerWrapper } from 'lib/utils'
import { AWSTypes } from 'lib/types'
import { sampleGetSchema } from './validators'
import moment from 'moment';

// type Query = {
//     sampleUUID: string
// }

// const lambda: AWSTypes.LambdaLogic<Query> = async event => {
//     const { transaction, queryStringParameters } = event
//     const { sampleUUID } = queryStringParameters

//     const sampleOperations = new SampleOperations(transaction)
//     // todo: add jest tests

//     return sampleOperations.getSampleIdByUUID(sampleUUID)
// }

// export const handler = handlerWrapper<Query>(lambda)

export const handler = async () => {
    const response = {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Test Functions call mk5',
          date:moment()
        },
        null,
        2
      ),
    };
    return response;
    // callback(null, response);
  };