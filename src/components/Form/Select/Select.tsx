import styles from "./Select.module.scss";


interface Option {
    label: string;
    value: string;
}

interface SelectProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    options: Option[];
    error?: string;
}

const Select: React.FC<SelectProps> = ({ label, value, onChange, options, error }) => {
    return (
        <div className={styles.selectContainer}>
            <label>{label}</label>
            <select value={value} onChange={(e) => onChange(e.target.value)}>
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value} className={styles.option}>
                        {opt.label}
                    </option>
                ))}
            </select>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};

export default Select;
