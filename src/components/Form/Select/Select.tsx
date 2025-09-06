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
        <div style={{ marginBottom: "1rem" }}>
            <label>{label}</label>
            <select value={value} onChange={(e) => onChange(e.target.value)}>
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};

export default Select;
