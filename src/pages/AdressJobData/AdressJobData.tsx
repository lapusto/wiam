import { useState, useEffect } from "react";
import Input from "../../components/Form/Input/Input";
import Select from "../../components/Form/Select/Select";
import { useFormData } from "../../hooks/useFormData";
import { useNavigate } from "react-router-dom";
import FormBlank from "../../components/Form/FormBlank/FormBlank";

interface Job {
  name: string;
  slug: string;
  url: string;
}

const AddressJobData: React.FC = () => {
  const { data, setFormValues } = useFormData();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((categories: Job[]) => setJobs(categories))
      .catch((err) => console.error(err));
  }, []);

  const handleNext = () => {
    const newErrors: { [key: string]: string } = {};
    if (!data.workplace) newErrors.workplace = "Место работы обязательно";
    if (!data.address) newErrors.address = "Адрес обязателен";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      navigate("/loan");
    }
  };

  const handleBack = () => window.history.back();

  return (
    <FormBlank title="2/3: Адрес и место работы" onBack={handleBack} onNext={handleNext}>
      <Select
        label="Место работы:"
        value={data.workplace || ""}
        onChange={(val) => setFormValues({ workplace: val })}
        options={[
          { label: "Выберите место работы", value: "" },
          ...jobs.map((job) => ({ label: job.name, value: job.slug })),
        ]}
        error={errors.workplace}
      />
      <Input
        label="Адрес проживания:"
        value={data.address || ""}
        onChange={(val) => setFormValues({ address: val })}
        error={errors.address}
      />
    </FormBlank>
  );
};

export default AddressJobData;
