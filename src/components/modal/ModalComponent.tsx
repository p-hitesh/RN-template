import React, { PropsWithChildren, useRef, useState, useEffect } from "react";
import "./modalStyles.scss";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<PropsWithChildren<ModalProps>> = ({
  isOpen,
  onClose,
  children,
}) => {
  const [modalLeft, setModalLeft] = useState(0);
  const [modalTop, setModalTop] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [originalX, setOriginalX] = useState(0);
  const [originalY, setOriginalY] = useState(0);
  const [deltaX, setDeltaX] = useState(0);
  const [deltaY, setDeltaY] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!dragging) return;

      setDeltaX(event.clientX - originalX);
      setDeltaY(event.clientY - originalY);
    };

    const handleMouseUp = (event: MouseEvent) => {
      if (!dragging) return;

      setDragging(false);
      setModalLeft(modalLeft + deltaX);
      setModalTop(modalTop + deltaY);
      setDeltaX(0);
      setDeltaY(0);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging, originalX, originalY, deltaX, deltaY, modalLeft, modalTop]);

  const handleMouseDown = (event: React.MouseEvent) => {
    if (!modalRef.current) return;
    setDragging(true);
    setOriginalX(event.clientX);
    setOriginalY(event.clientY);
  };

  return isOpen ? (
    <div className="modal-overlay">
      <div
        className="modal"
        ref={modalRef}
        style={{ left: modalLeft, top: modalTop }}
        onMouseDown={handleMouseDown}
      >
        {children}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Modal;
