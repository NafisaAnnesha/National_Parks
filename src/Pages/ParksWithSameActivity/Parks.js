import React, { useContext, useEffect, useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router';
import { Link } from 'react-scroll';
import { ActivitiesContext } from '../../App';
import LoadingAnimation from '../../Components/LoadingAnimation/LoadingAnimation';
import './Parks.css';

//  Main functional component
const Parks = () => {
    //  again using the ActivitiesContext
    const [activities, setActivities] = useContext(ActivitiesContext);
    const [activity, setActivity] = useState([]);
    const {activityId} = useParams();
    const navigate = useNavigate();

    //  handling onClick event
    const seeInfo = (park)=>{
        navigate(`/${activity.id}/${park.parkCode}`);
    };

    // finding specific activity with the activityId from the activities(API data) array inside the useEffect hook and array.find() function. 
    useEffect(()=>{
        const activityData = activities.find(activity => activity.id === activityId);
        setActivity(activityData);
    }, [activityId, activities])

    return (
         <div className="mainParks-container">
                <>
                <h1 className="parks-title">
                    All the parks that offers the activity: <span>{activity?.name}</span>
                </h1>
                <p className="total-parks">Active on <span>{activity?.parks?.length}</span> parks</p>
                </>
                <div className="parkInfo-container" id="parkInfo">
                    {/*specify the position where the park info will be shown. */}
                    <Outlet className="parkInfo" />
                </div>
        <div className="parks-container">
            {
                //  checking the data if available or not with ternary operation.
                activity?.parks?.length > 0
                ?
                activity?.parks?.map(park => 
                         <div className="park-box"  key={park.parkCode} href="#parkInfo">
                            <h2 className="park-title">{park.fullName}</h2>
                            <p >Designation:  
                                <span className="park-designation"> {park.designation}</span>
                            </p>
                            <p className="park-location">Located In: {park.states}</p>
                            <Link to="parkInfo" onClick={()=> seeInfo(park)}  smooth={true} duration={800} exact="true" className="learnMore-button">Learn More</Link>
                        </div>
                    )
                    : <LoadingAnimation/>
   
            }
        </div>
        </div>
        
    );
};

export default Parks;