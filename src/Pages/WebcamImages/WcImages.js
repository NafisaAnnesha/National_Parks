import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import LoadingAnimation from '../../Components/LoadingAnimation/LoadingAnimation';
import './WcImages.css';

const WcImages = () => {
const {parkCode} = useParams();
const [parkData, setParkData] = useState([]);

//  Integreting the API last time. 
useEffect(()=>{
   const url=`https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=G7HmcqAc4yMhuDjCOazuI5bw71u2uzfLh3WOM9wg`;
   fetch(url)
   .then(res => res.json())
   .then(data => setParkData(data?.data[0]))
}, [parkCode]);
//  gets data according to the parkCode
console.log(parkData)
    return (
        <div className="images-container">
            <h2 className="park-title">Showing the <span>{parkData.fullName}</span></h2>
            {
                parkData?.images?.length > 0
                ?
                parkData?.images?.map(i=>
                    <div className="park-image">
                        <img src={i.url} alt="Park_Image" />
                    </div>
                )
                :
                <LoadingAnimation/>
            }
        </div>
    );
};

export default WcImages;