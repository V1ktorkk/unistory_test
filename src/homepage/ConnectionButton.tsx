
import React from 'react';
import { useEthers } from '@usedapp/core';
import './ConnectionButton.css';
import {texts} from "../texts/texts";


interface ConnectionButtonContextValue {
    account: string | undefined;
}

const ConnectionButtonContext = React.createContext<ConnectionButtonContextValue | undefined>(undefined);

export const ConnectionButtonProvider: React.FC<{ children: React.ReactNode }> = (props) => {
    const { account } = useEthers();

    const contextValue: ConnectionButtonContextValue = {
        account,
    };

    return <ConnectionButtonContext.Provider value={contextValue}>{props.children}</ConnectionButtonContext.Provider>;
};


export const useConnectionButton = (): ConnectionButtonContextValue => {
    const context = React.useContext(ConnectionButtonContext);
    if (!context) {
        throw new Error('useConnectionButton must be used within a ConnectionButtonProvider');
    }
    return context;
};

const ConnectButton = () => {
    const { account,  activateBrowserWallet } = useEthers();
    if (account) return <div>
        <p className="bold">{account}</p>
    </div>;
    else return <button className='connect_but' onClick={() => activateBrowserWallet()}>{texts.buttonText}</button>
};

export default function ConnectionButton() {
    return (
        <ConnectionButtonProvider>
            <div>
                <ConnectButton />
            </div>
        </ConnectionButtonProvider>
    );
}
