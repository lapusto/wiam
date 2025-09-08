import { createContext } from "react";

export interface FormData {
  phone: string;
  firstName: string;
  lastName: string;
  gender: "" | "male" | "female";
  workplace?: string;
  address?: string;
  loanAmount?: number;
  loanTerm?: number;
}

export interface FormContextType {
  data: FormData;
  setFormValues: (values: Partial<FormData>) => void;
}

export const FormContext = createContext<FormContextType | undefined>(undefined);