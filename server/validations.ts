import Joi from "joi"


export const MessageSchema = Joi.object ({
    name: Joi.string().min(3).required(),
    message: Joi.string().min(3).required(),
})