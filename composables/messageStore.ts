import { defineStore } from "pinia";
import type { IMessage } from "~/types";

export const useMessageStore = defineStore("message-store", {
    state: () => ({
        messages: [] as IMessage[],
    }),
    actions: {
        async getAll() {
            try {
                let data = await $fetch<IMessage[]>("/api/messages");
                this.messages = data;
                return data as IMessage[];
            } catch (e) {
                console.log(e)
            }
        },
        async create(name: string, message: string) {
            await $fetch("/api/messages/create", {
                method: "POST",
                body: {name, message},
            })
                .catch((e) => {
                    console.log(e)
                })
                .then(async () => {
                    await this.getAll();
                    console.log("Mensagem criada.")
                })
        },
        formatarData(data:string) {
            var partes = data.split("T");
            var dataPartes = partes[0].split("-");
            var tempoPartes = partes[1].split(":");
            var ano = dataPartes[0].substring(2);
            var mes = dataPartes[1];
            var dia = dataPartes[2];
            var hora = tempoPartes[0];
            var minuto = tempoPartes[1];
            return hora + ":" + minuto + " - " + dia + "/" + mes + "/" + ano;
        }
    }
})