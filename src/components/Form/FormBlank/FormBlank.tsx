import React from "react";
import styles from "./FormBlank.module.scss";
import Button from "../../Button/Button";

interface FormBlankProps {
  title: string;
  children: React.ReactNode;
  onBack?: () => void;
  onNext?: () => void;
  nextLabel?: string;
}

const FormBlank: React.FC<FormBlankProps> = ({
  title,
  children,
  onBack,
  onNext,
  nextLabel = "Далее",
}) => {
  return (
    <div className={styles.formContainer}>
      <h1>{title}</h1>
      <div className={styles.formBody}>{children}</div>
      <div className={styles.formActions}>
        {onBack && <Button onClick={onBack}>Назад</Button>}
        {onNext && <Button onClick={onNext}>{nextLabel}</Button>}
      </div>
    </div>
  );
};

export default FormBlank;
