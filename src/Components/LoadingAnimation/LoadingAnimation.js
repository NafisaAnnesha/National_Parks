import React from 'react';
import './LoadingAnimation.css';

//  SImple loading text appears when data is being loaded from the api
const LoadingAnimation = () => {
    return (
        <div className="animation-container">
            <h1 className="animation-text">Loading...</h1>
        </div>
    );
};

export default LoadingAnimation;