import styles from "./Range.module.scss";

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
        <div className={styles.rangeContainer}>
            <label>{label}: <span>{value}</span></label>
            <input
                className={styles.range}
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