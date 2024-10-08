import { Description } from "@radix-ui/react-dialog"
import { z } from "zod"
export const eventFormSchema = z.object({
    title: z.string().min(3, {
        message: "O título deve ter pelo menos 3 caracteres",
    }),
    description: z.string().min(3, {
        message: "A descrição deve ter pelo menos 3 caracteres",
    }).max(400,"A descrição deve ter menos de 400 caracteres"),
    location: z.string().min(3, {
        message: "A localização deve ter pelo menos 3 caracteres",
    }).max(400,"A localização deve ter menos de 400 caracteres"),
    imageUrl: z.string(),
    startDateTime: z.date(),
    enDateTime: z.date(),
    categoryId: z.string(),
    price: z.string(),
    isFree: z.boolean(),
    url: z.string().url(),
})
