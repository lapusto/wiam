import { z } from "zod";

export const addressJobSchema = z.object({
  workplace: z.string().min(1, "Укажите место работы"),
  address: z.string().min(1, "Укажите адрес"),
});

export type AddressJobSchema = z.infer<typeof addressJobSchema>;