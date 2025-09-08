import { IMaskInput } from "react-imask";
import styles from "./Input.module.scss"
import { useRef } from "react";

interface InputProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    error?: string;
    type?: string;
    mask?: string;
}

const Input: React.FC<InputProps> = ({ label, value, onChange, placeholder, error, type = "text", mask }) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const inputId = label.toLowerCase().replace(/\s/g, "")
    return (
        <div className={styles.inputContainer}>
            <label htmlFor={inputId}>{label}</label>
            {mask ? (
                <IMaskInput
                    id={inputId}
                    mask={mask}
                    value={value}
                    inputRef={inputRef}
                    onAccept={(val: string) => onChange(val)}
                    placeholder={placeholder}
                />
            ) : (
                <input
                    id={inputId}
                    type={type}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                />
            )}
            {error && <p className={styles.error}>{error}</p>}
        </div>
    );
};

export default Input;
