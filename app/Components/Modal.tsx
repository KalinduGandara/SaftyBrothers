'use client'
import React, { useEffect, useRef, useState } from 'react'

interface Props {
    children: React.ReactNode,
    title: string,
    isOpen: boolean;
    onClose?: () => void;

}

function Modal({ children, title, isOpen, onClose }: Props) {

    const [isModalOpen, setModalOpen] = useState(isOpen);
    const modalRef = useRef<HTMLDialogElement>(null);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
        if (event.key === "Escape") {
            handleCloseModal();
        }
    };
    const handleCloseModal = () => {
        if (onClose) {
            onClose();
        }
        setModalOpen(false);
    };

    useEffect(() => {
        setModalOpen(isOpen);
    }, [isOpen]);

    useEffect(() => {
        const modalElement = modalRef.current;

        if (modalElement) {
            if (isModalOpen) {
                modalElement.showModal();
            } else {
                modalElement.close();
            }
        }
    }, [isModalOpen]);


    return (
        <>

            <dialog onKeyDown={handleKeyDown} ref={modalRef} id="my_modal_5" className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-2xl">{title}</h3>
                    <div className="modal-action">
                        <button onClick={handleCloseModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </div>
                    {children}
                </div>
            </dialog>
        </>
    )
}

export default Modal