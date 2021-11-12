import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { ActivitiesContext } from "../../App";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import "./Activities.css";



//  Main component function
const Activities = () => {
        //  using the context api created on the App.js file.
        const [activities, setActivities] = useContext(ActivitiesContext);

        //  using useNavigate react hook. (before it was useHistory. In the last update or react router dom it is using as useNavigate)
        const navigate = useNavigate();
        
      //  Function to handle the clik command to  pull up the user in the parks page
      const seeParks =(data)=>{  
        navigate(`/${data.id}`);
      } ;
  
       
  return (
    <div className="activities-container">
      <>
      {activities.length > 0 && (
        <h1 className="activities-title">
          All activities to do at different national parks!
        </h1>
      )}
      <p className="info-text">Click any activity to see parks</p>
      </>
      <div className="grid-items">
        {
          // checking if the data available or not with ternary operation. 
          activities.length > 0 
          ? (
            activities.map((activity) => (
            <div className="activity-box" onClick={()=>seeParks(activity)} key={activity.id}>
              <h2 className="activity-title">{activity.name}</h2>
              <p className="total-parks">Active on <span>{activity.parks.length}</span> parks</p>
            </div>
          ))
        ) 
        : (
          <LoadingAnimation />
        )}
      </div>
    </div>
  );
};

export default Activities;