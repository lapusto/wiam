import React from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div>
            <div>
                {children}
                <button onClick={onClose} style={{ marginTop: "1rem", padding: "0.5rem 1rem", cursor: "pointer" }}>
                    Закрыть
                </button>
            </div>
        </div>
    );
};

export default Modal;
