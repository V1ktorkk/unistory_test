import React, { useState, useEffect } from 'react';
import './Notification.css';
import {texts} from "../texts/texts";

function Notification() {
    const [showModal, setShowModal] = useState(true);

    const closeModal = () => {
        setShowModal(false);
    };

    useEffect(() => {

        setShowModal(true);
    }, []);

    return (
        <div className="Notification">
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h1>{texts.metamask}</h1>
                        <p>
                            {texts.toWork}
                            <a href="https://metamask.io/download/" target="_blank" rel="noopener noreferrer"
                               className="extension-link">
                                {texts.extension}
                            </a>
                        </p>
                        <button onClick={closeModal}>{texts.skip}</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Notification;
