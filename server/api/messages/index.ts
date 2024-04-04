import MessageModel from "~/server/models/Message.model"

export default defineEventHandler(async event => {
    return await MessageModel.find();
})