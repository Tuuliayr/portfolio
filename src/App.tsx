import React from 'react';
import LanguageSelector from './components/languageSelector/LanguageSelector';
import MyIntroduction from './components/myIntroduction/MyIntroduction';
import Projects from './components/projects/Projects';
import ContactMe from './components/contactMe/ContactMe';
import Footer from './components/footer/Footer';

function App() {
    return (
        <>
            <LanguageSelector/>
            <MyIntroduction/>
            <Projects/>
            <ContactMe/>
            <Footer/>
        </>
    );
}

export default App;
