import React from "react";
import "./modal.css"; // se quiser usar o CSS sugerido

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null; // não renderiza nada se estiver fechado

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
}
