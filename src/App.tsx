import React from 'react';
import "./Styles.scss";
import NavbarSelector from './components/navbar/NavbarSelector';
import MyIntroduction from './components/myIntroduction/MyIntroduction';
import Projects from './components/projects/Projects';
import ContactMe from './components/contactMe/ContactMe';
import Footer from './components/footer/Footer';

function App() {
    return (
        <div>
            <NavbarSelector/>
            <div className="app">
                <MyIntroduction/>
                <Projects/>
                <ContactMe/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
