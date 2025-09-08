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

export const DEFAULT_FORM_DATA: FormData = {
  phone: "",
  firstName: "",
  lastName: "",
  gender: "",
  workplace: "",
  address: "",
  loanAmount: undefined,
  loanTerm: undefined,
};

export interface FormContextType {
  data: FormData;
  setFormValues: (values: Partial<FormData>) => void;
}

export const FormContext = createContext<FormContextType | undefined>(undefined);