import RoleSelector from "./Components/RoleSelector";
import Header from "./Components/Header";
import { useState } from "react";
import ComedianHomePage from "./Pages/PerformerHomePage";
import VenueHomePage from "./Pages/VenueHomePage";

function App() {


  //Extract to GlobalContext
  const [performerView, setPerformerView] = useState(true)
  const [loggedIn, setLoggedIn] = useState(false)
  

  return (
    <div className="App">
      <Header/>
      {performerView ? 
      <ComedianHomePage 
      performerView={performerView} 
      setPerformerView={setPerformerView}
      /> : 
      <VenueHomePage 
      performerView={performerView}
      setPerformerView={setPerformerView}
      />}
    </div>
  );
}

export default App;
