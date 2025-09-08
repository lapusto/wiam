import Input from "../../components/Form/Input/Input";
import Select from "../../components/Form/Select/Select";
import { useFormData } from "../../hooks/useFormData";
import { useNavigate } from "react-router-dom";
import FormBlank from "../../components/Form/FormBlank/FormBlank";
import { personalDataSchema } from "../../schemas/PesonalDataSchema";
import { useFormValidation } from "../../hooks/useFormValidate";

const PersonalData: React.FC = () => {

  const { data, setFormValues } = useFormData();
  const navigate = useNavigate()
  const { errors, validate } = useFormValidation(personalDataSchema)

  const handleNext = () => {
    const phoneUnmasked = data.phone.replace(/\D/g, "");
    const valuesToValidate = {
      ...data,
      phone: phoneUnmasked,
      gender: data.gender as "male" | "female",
    }
    validate(valuesToValidate, () => navigate("/address-job"))
  }

  return (
    <FormBlank title="1/3: Личные данные" onNext={handleNext}>
      <Input // при большем количестве инпутов я бы использовала объекты с конфигурациями и отрисовывала массив инпутов через map
        type="tel"
        label="Телефон:"
        value={data.phone}
        onChange={(val) => setFormValues({ phone: val })}
        error={errors.phone}
        mask="{0} (000) 000-000"
        placeholder="{0} (000) 000-000"
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
        value={data.gender ?? ""}
        onChange={val => setFormValues({ gender: val === "male" || val === "female" ? val : undefined })}
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
