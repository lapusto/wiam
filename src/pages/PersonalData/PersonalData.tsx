import { useState } from "react";
import Input from "../../components/Form/Input/Input";
import Select from "../../components/Form/Select/Select";
import { useFormData } from "../../hooks/useFormData";
import { useNavigate } from "react-router-dom";
import FormBlank from "../../components/Form/FormBlank/FormBlank";
import { personalDataSchema } from "../../schemas/PesonalDataSchema";

const PersonalData: React.FC = () => {
  const { data, setFormValues } = useFormData();
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const navigate = useNavigate();

  const handleNext = () => {
    const result = personalDataSchema.safeParse(data)
    if (!result.success) {
      const newErrors: { [key: string]: string } = {}
      result.error.issues.forEach((issue) => {
        const field = issue.path[0]
        if (typeof field === "string") {
          newErrors[field] = issue.message
        }
      })
      setErrors(newErrors)
      return
    }
    navigate("/address-job")
  };

  return (
    <FormBlank title="1/3: Личные данные" onNext={handleNext}>
      <Input
        type="tel"
        label="Телефон:"
        value={data.phone}
        onChange={(val) => setFormValues({ phone: val })}
        placeholder="0XXX XXX XXX"
        error={errors.phone}
      />
      <Input
        label="Имя:"
        value={data.firstName}
        onChange={(val) => setFormValues({ firstName: val })}
        error={errors.firstName}
      />
      <Input
        label="Фамилия:"
        value={data.lastName}
        onChange={(val) => setFormValues({ lastName: val })}
        error={errors.lastName}
      />
      <Select
        label="Пол:"
        value={data.gender}
        onChange={(val) => setFormValues({ gender: val })}
        options={[
          { label: "Выберите пол", value: "" },
          { label: "Мужской", value: "male" },
          { label: "Женский", value: "female" },
        ]}
        error={errors.gender}
      />
    </FormBlank>
  );
};

export default PersonalData;
