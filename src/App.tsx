import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useMediaQuery } from '@mui/material';
import Navbar from './components/navbar/desktop/Navbar';
import NavbarMobile from './components/navbar/mobile/NavbarMobile';
import Main from './pages/mainPage/Main';
import BakeryApp from './pages/projectPages/BakeryApp';
import DanceVote from './pages/projectPages/DanceVote';
import FarmersApp from './pages/projectPages/FarmersApp';
import ProjectBaltic from './pages/projectPages/ProjectBaltic';

function App() {
    const smallScreen = useMediaQuery('(max-width: 768px)');

    return (
        <BrowserRouter>
            <Navbar/>
            {smallScreen && <NavbarMobile/>}
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/bakery-app" element={<BakeryApp/>}/>
                <Route path="/dance-vote" element={<DanceVote/>}/>
                <Route path="/farmers-app" element={<FarmersApp/>}/>
                <Route path="/project-baltic" element={<ProjectBaltic/>}/>
                {/* <Route path="/*" element={<NoPage/>}/> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
