import React from 'react';
import "./App.scss";
import MyIntroduction from './components/myIntroduction/MyIntroduction';
import Projects from './components/projects/Projects';
import ContactMe from './components/contactMe/ContactMe';
import Footer from './components/footer/Footer';

function App() {
    return (
        <div className="app">
            <MyIntroduction/>
            <Projects/>
            <ContactMe/>
            <Footer/>
        </div>
    );
}

export default App;
