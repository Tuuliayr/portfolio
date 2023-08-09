import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import BakeryApp from './components/projects/projectPages/bakeryApp/BakeryApp';
import DanceVote from './components/projects/projectPages/danceVote/DanceVote';
import FarmersApp from './components/projects/projectPages/farmersApp/FarmersApp';
import ProjectBaltic from './components/projects/projectPages/projectBaltic/ProjectBaltic';
import "./i18n";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/bakery-app" element={<BakeryApp/>}/>
                <Route path="/dance-vote" element={<DanceVote/>}/>
                <Route path="/farmers-app" element={<FarmersApp/>}/>
                <Route path="/project-baltic" element={<ProjectBaltic/>}/>
                {/* <Route path="/*" element={<NoPage/>}/> */}
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
