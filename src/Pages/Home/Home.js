import React from 'react';
import Activities from '../../Components/Activities/Activities';
import './Home.css';


//  Home component. The main page of the application.
const Home = () => {
    return (
        <div className="homepage-container">
            <Activities/>
        </div>
    );
};

export default Home;
