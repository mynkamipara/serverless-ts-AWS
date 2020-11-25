import joi from 'joi';
import { joiCommon } from 'lib/common';

export const registerUserSchema = joi.object({
    email: joi.string().required()
})
