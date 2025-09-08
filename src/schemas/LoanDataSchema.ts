import { z } from "zod";

export const loanSchema = z.object({
  loanAmount: z
    .coerce.number({ message: "Выберите сумму займа" })
    .min(200, "Минимальная сумма 200$")
    .max(1000, "Максимальная сумма 1000$"),
  loanTerm: z
    .coerce.number({ message: "Укажите желаемый срок" })
    .min(10, "Минимальный срок — 10 дней")
    .max(30, "Максимальный срок — 30 дней"),
});
