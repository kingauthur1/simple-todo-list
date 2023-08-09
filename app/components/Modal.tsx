import React, { Children } from "react";

interface Modalprops {
    modalOpen: boolean;
    setModalOpen: (open: boolean) => boolean | void;
    children: React.ReactNode
}

const Modal: React.FC<Modalprops> = ({ modalOpen, setModalOpen, children }) => {
    return (
        <div className='modal ${modalOpen ? "modal-open" : ""}'>
           <div className="modal-box relative">
            <label onClick={() => setModalOpen(false)}
            className="btn btn-sm btn-circle absolute right-2 top-2">
                x
            </label>
            {children} 
           </div>
        </div>
    );
};

export default Modal;