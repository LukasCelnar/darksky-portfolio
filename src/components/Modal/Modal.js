import React from 'react';
import './Modal.scss';

const Modal = ({ children, showModal, setShowModal }) => {
    if (!showModal) {
        return null;
    }

    return (
        <div className='modal'>
            <div className='modal__container'>
                <img onClick={() => setShowModal(false)} className='modal__container-x' src='/images/modal/x-white.png' alt='x' />
                {children}
            </div>
        </div>
    );
};

export default Modal;