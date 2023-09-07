import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Header from './Header';
import NewsCont from './NewsCont'
import Footer from './Footer';
import Sendfeed from './Subpages/Sendfeed';
const Home = () => {
    return (
        <>
        <div>
            <Navbar />
            <Banner />
            <Header />
            <NewsCont />
            <Footer/>
            
            
        </div>
        </>
    );
}

export default Home;
