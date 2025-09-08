import { useState } from "react";
import type { ZodType, infer as ZodInfer } from "zod";

export const useFormValidation = <Schema extends ZodType<object>>(schema: Schema) => {
    type FormValues = ZodInfer<Schema>
    const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({})

    const validate = (values: FormValues, onSuccess: () => void) => {
        const result = schema.safeParse(values);
        if (!result.success) {
            const formattedErrors: Partial<Record<keyof FormValues, string>> = {}
            result.error.issues.forEach((issue) => {
                const field = issue.path[0]
                if (typeof field === "string" && field in values) {
                    formattedErrors[field as keyof FormValues] = issue.message
                }
            })
            setErrors(formattedErrors)
            return
        }
        setErrors({})
        onSuccess()
    };

    return { errors, validate }
};
