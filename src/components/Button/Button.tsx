import styles from "./Button.module.scss";

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, type = "button", disabled = false }) => {
    return (
        <button type={type} onClick={onClick} disabled={disabled} className={styles.button}>
            {children}
        </button>
    );
};

export default Button;
