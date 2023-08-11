import React from 'react';
import NavbarSelector from '../../components/navbar/NavbarSelector';
import MyIntroduction from '../../components/myIntroduction/MyIntroduction';
import Projects from '../../components/projects/Projects';
import ContactMe from '../../components/contactMe/ContactMe';
import Footer from '../../components/footer/Footer';

const Main: React.FC = () => {
    return (
        <div>
            <NavbarSelector/>
            <div className="main">
                <MyIntroduction/>
                <Projects/>
                <ContactMe/>
                <Footer/>
            </div>
        </div>
    );
}

export default Main;