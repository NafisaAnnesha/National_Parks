import { createContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import ParkInfo from './Pages/ParkInformation/ParkInfo';
import Parks from './Pages/ParksWithSameActivity/Parks';
import WcImages from './Pages/WebcamImages/WcImages';



//  Creating the Activities context to use the activity data from anywhere of the applicationl.
export const ActivitiesContext = createContext();


function App() {
  const [activities, setActivities] = useState([]);
  
   //  Integretining the 1st  API  
   useEffect(() => {
    const apiURL = `https://developer.nps.gov/api/v1/activities/parks?api_key=G7HmcqAc4yMhuDjCOazuI5bw71u2uzfLh3WOM9wg`;
    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => setActivities(data.data))
  }, []);
  
  return (
    <div className="App">
      {/* Wrapping the app elements inside the ActivitiesContext and providing the data as value. */}
    <ActivitiesContext.Provider value={[activities, setActivities]}>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/:activityId" element={<Parks/>} >
              <Route path=":parkCode" element={<ParkInfo/>} />
          </Route>
          <Route path="/images/:parkCode" element={<WcImages/>} />
        </Routes>
    </ActivitiesContext.Provider>
    </div>
  );
}

export default App;
