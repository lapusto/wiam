import { useState } from "react";
import { useFormData } from "../../hooks/useFormData";
import { useNavigate } from "react-router-dom";
import Range from "../../components/Form/Range/Range";
import Modal from "../../components/Modal/Modal";
import FormBlank from "../../components/Form/FormBlank/FormBlank";

const LoanData: React.FC = () => {
    const { data, setFormValues } = useFormData();
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleNext = () => {
        const newErrors: { [key: string]: string } = {};
        if (!data.loanAmount) newErrors.loanAmount = "Сумма займа обязательна";
        if (!data.loanTerm) newErrors.loanTerm = "Срок займа обязателен";

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            setIsModalOpen(true);
        }
    };

    const handleBack = () => window.history.back();

    const handleCloseModal = () => {
        setFormValues({
            phone: "",
            firstName: "",
            lastName: "",
            gender: "",
            workplace: "",
            address: "",
            loanAmount: undefined,
            loanTerm: undefined,
        });
        setIsModalOpen(false);
        navigate("/");
    };

    return (
        <>
            <FormBlank title="3/3: Параметры займа" onBack={handleBack} onNext={handleNext} nextLabel="Подать заявку">
                <Range
                    label="Сумма займа, $"
                    value={data.loanAmount || 200}
                    min={200}
                    max={1000}
                    step={100}
                    onChange={(val) => setFormValues({ loanAmount: val })}
                    error={errors.loanAmount}
                />
                <Range
                    label="Срок займа, дни"
                    value={data.loanTerm || 10}
                    min={10}
                    max={30}
                    step={1}
                    onChange={(val) => setFormValues({ loanTerm: val })}
                    error={errors.loanTerm}
                />
            </FormBlank>

            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <p>
                    Поздравляем, {data.lastName} {data.firstName}. Вам одобрена сумма {data.loanAmount}$ на {data.loanTerm} дней.
                </p>
            </Modal>
        </>
    );
};

export default LoanData;
