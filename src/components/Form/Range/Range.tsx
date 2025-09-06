interface RangeProps {
    label: string;
    value: number;
    onChange: (val: number) => void;
    min: number;
    max: number;
    step?: number;
    error?: string;
}

const Range: React.FC<RangeProps> = ({ label, value, onChange, min, max, step = 1, error }) => {
    return (
        <div style={{ marginBottom: "1rem" }}>
            <label>{label}: {value}</label>
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};

export default Range;