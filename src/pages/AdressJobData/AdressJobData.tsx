import { useState, useEffect } from "react";
import Input from "../../components/Form/Input/Input";
import Select from "../../components/Form/Select/Select";
import { useFormData } from "../../hooks/useFormData";

interface Job {
    name: string;
    slug: string;
    url: string;
}

const AddressJobData: React.FC = () => {
    const { data, setFormValues } = useFormData();
    const [jobs, setJobs] = useState<Job[]>([]);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});


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
            return true
        }
    };

    const handleBack = () => {

    };

    return (
        <div>
            <h1>Форма: Адрес и место работы</h1>
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
            <button onClick={handleBack}>Назад</button>
            <button onClick={handleNext}>Далее</button>
        </div>
    );
};

export default AddressJobData;
