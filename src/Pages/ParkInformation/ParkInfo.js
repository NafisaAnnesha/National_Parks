import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import './ParkInfo.css';


const ParkInfo = () => {
    //  using useParams react hook to capture the parkCode from url parameters
    const {parkCode} = useParams();
    const [parkData, setParkData] = useState({});
    const navigate = useNavigate();


    //  Integreting the second API  to show detailed park information with the park code
    useEffect(()=>{
        let url=`https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=G7HmcqAc4yMhuDjCOazuI5bw71u2uzfLh3WOM9wg`;
        fetch(url)
        .then(res => res.json())
        .then(pData => setParkData(pData.data[0]))
    }, [parkCode])

    //  function to handle click and navigate the user in the WcImages.js page
    const seeImages = ()=>{
        navigate(`/images/${parkCode}`)
    };
    return (
        <>
        {
            parkData 
            &&
            // showing the parkInfo-container
            <div className="parkInfo-container">
            <h2 className="park-title">{parkData.fullName} </h2>
            <p className="park-description">{parkData.description}</p>
            <div className="button-container">
                <button className="learnMore-button" onClick={()=> seeImages()}>See Photos</button>
                <a href={parkData.url} alt="/" className="link-button" target="_blank" rel="noreferrer">Website</a>
            </div>
            </div>
        }
        </>
    );
};

export default ParkInfo;