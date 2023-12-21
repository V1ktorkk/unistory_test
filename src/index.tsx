import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainPage from './homepage/MainPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Mainnet, DAppProvider, Config, Goerli } from '@usedapp/core'
import { getDefaultProvider } from 'ethers'
import PersonalData from "./personalDataPage/PersonalData";
import {DataProvider} from "./personalDataPage/DataContext";
import {ConnectionButtonProvider} from "./homepage/ConnectionButton";

const config: Config = {
    readOnlyChainId: Mainnet.chainId,
    readOnlyUrls: {
        [Mainnet.chainId]: getDefaultProvider('mainnet'),
        [Goerli.chainId]: getDefaultProvider('goerli'),
    },
}
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Router>
            <DAppProvider config={config}>
                <DataProvider>
                    <ConnectionButtonProvider>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/personal-data/:id" element={<PersonalData />} />
                </Routes>
                    </ConnectionButtonProvider>
                </DataProvider>

            </DAppProvider>
        </Router>
    </React.StrictMode>
);

