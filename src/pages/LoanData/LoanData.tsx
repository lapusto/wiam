import { useState } from "react";
import { useFormData } from "../../hooks/useFormData";
import { useNavigate } from "react-router-dom";
import Range from "../../components/Form/Range/Range";
import Modal from "../../components/Modal/Modal";
import FormBlank from "../../components/Form/FormBlank/FormBlank";
import { loanSchema } from "../../schemas/LoanDataSchema";
import { useFormValidation } from "../../hooks/useFormValidate";
import { DEFAULT_FORM_DATA } from "../../context/FormContext";

const LoanData: React.FC = () => {
    const { data, setFormValues } = useFormData();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    const { errors, validate } = useFormValidation(loanSchema);

    const handleNext = () => {
        const valuesToValidate = {
            loanAmount: Number(data.loanAmount),
            loanTerm: Number(data.loanTerm),
        }
        validate(valuesToValidate, () => setIsModalOpen(true));
    }

    const handleBack = () => window.history.back();

    const handleCloseModal = () => {
        setFormValues(DEFAULT_FORM_DATA);
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
