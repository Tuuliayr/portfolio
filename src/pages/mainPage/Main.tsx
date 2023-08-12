import React from 'react';
import MyIntroduction from '../../components/myIntroduction/MyIntroduction';
import Projects from '../../components/projects/Projects';
import ContactMe from '../../components/contactMe/ContactMe';
import Footer from '../../components/footer/Footer';

const Main: React.FC = () => {
    return (
        <div className="main">
            <MyIntroduction/>
            <Projects/>
            <ContactMe/>
            <Footer/>
        </div>
    );
}

export default Main;