import { NextFunction, HandlerLambda } from 'middy'
import { AWSTypes, ResponsesTypes } from 'lib/types'
import { sequelizeDBClientInit } from 'lib/drivers'

export const dbConnector = <Q = {}, B = {}>() => ({
    before: async (handler: HandlerLambda<AWSTypes.Event<Q, B>, ResponsesTypes.FullMiddlewareResponse>, next: NextFunction) => {
        // sequelizeDBClientInit;
        // return next()
    }
})
