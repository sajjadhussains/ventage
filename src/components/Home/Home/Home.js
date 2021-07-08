import React from 'react';
import BenefitsInfo from '../BenefitsInfo/BenefitsInfo';
import CounterSection from '../CounterSection/CounterSection';
import HeaderMain from '../HeaderMain/HeaderMain';
import HowItWork from '../HowItWork/HowItWork';
import JoinSection from '../JoinSection/JoinSection';
import Navbar from '../Navbar/Navbar';
import Footer from '../../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <BenefitsInfo></BenefitsInfo>
            <CounterSection></CounterSection>
            <HowItWork></HowItWork>
            <JoinSection></JoinSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;