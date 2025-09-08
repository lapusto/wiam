import styles from "./Input.module.scss"

interface InputProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    error?: string;
    type?: string;
}

const Input: React.FC<InputProps> = ({ label, value, onChange, placeholder, error, type = "text" }) => {
    return (
        <div className={styles.inputContainer}>
            <label>{label}</label>
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
            />
            {error && <p className={styles.error}>{error}</p>}
        </div>
    );
};

export default Input;
