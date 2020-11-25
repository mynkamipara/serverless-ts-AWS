import joi from 'joi'

export const joiCommon = {
    uuidV4: joi.string().guid({
        version: 'uuidv4'
    }),
    offset: joi.number().min(0),
    limit: joi.number().min(0)
}
