import { MessageSchema } from "~/server/validations";
import MessageModel from "~/server/models/Message.model";

export default defineEventHandler(async event => {
    
    const body = await readBody(event);

    let {error} = MessageSchema.validate(body);
    if(error) {
        throw createError({
            message: error.message.replace(/"/g, ""),
            statusCode: 400,
            fatal: false,
        });
    }

    // create book
    try {
        await MessageModel.create(body);
        return {message: "Message sented"};
    } catch (e) {
        throw createError({
            message: "Erro ao criar mensagem",
        });
    }
});
