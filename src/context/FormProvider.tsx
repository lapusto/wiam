import { useState, type ReactNode } from "react";
import { FormContext, type FormData } from "./FormContext";

export const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [data, setData] = useState<FormData>({
        phone: "",
        firstName: "",
        lastName: "",
        gender: "",
    });

    const setFormValues = (values: Partial<FormData>) => {
        setData((prev) => ({ ...prev, ...values }));
    };

    return <FormContext.Provider value={{ data, setFormValues }}>{children}</FormContext.Provider>;
};