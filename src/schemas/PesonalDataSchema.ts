import { z } from "zod";

export const personalDataSchema = z.object({
  phone: z
    .string()
    .regex(/^0\d{9}$/, "Телефон должен начинаться с 0 и состоять из 10 цифр"),
  firstName: z.string().min(1, "Введите имя"),
  lastName: z.string().min(1, "Введите фамилию"),
  gender: z.enum(["male", "female"], {
    message: "Укажите пол",
  }),
});

export type PersonalDataSchema = z.infer<typeof personalDataSchema>;
