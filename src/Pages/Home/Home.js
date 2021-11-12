import React from 'react';
import Activities from '../../Components/Activities/Activities';
import './Home.css';


//  Home component. It is the landing page of the application.
const Home = () => {
    return (
        <div className="homepage-container">
            <Activities/>
        </div>
    );
};

export default Home;