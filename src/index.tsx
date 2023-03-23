import React from 'react';
import ReactDOM from 'react-dom/client';
import MediaQuery from 'react-responsive';
import App from './App';
import "./i18n";
import Navbar from './components/navbar/Navbar';
import NavbarMobile from './components/navbar/NavbarMobile';
import TopBarMobile from './components/navbar/TopBarMobile';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <MediaQuery maxWidth={991}>
            <TopBarMobile/>
            <NavbarMobile/>
        </MediaQuery>
        <MediaQuery minWidth={992}>
            <Navbar/>
        </MediaQuery>
        <App />
    </React.StrictMode>
);
