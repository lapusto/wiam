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
        <div style={{ marginBottom: "1rem" }}>
            <label>{label}</label>
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};

export default Input;
