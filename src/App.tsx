import React from 'react';
import LanguageSelector from './components/languageSelector/LanguageSelector';
import MyIntroduction from './components/myIntroduction/MyIntroduction';
import Projects from './components/projects/Projects';
import ContactMe from './components/contactMe/ContactMe';

function App() {
    return (
        <>
            <LanguageSelector/>
            <MyIntroduction/>
            <Projects/>
            <ContactMe/>
        </>
    );
}

export default App;
