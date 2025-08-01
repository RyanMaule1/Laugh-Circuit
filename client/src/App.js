import RoleSelector from "./Components/RoleSelector";
import Header from "./Components/Header";
import { useState } from "react";
import ComedianHomePage from "./Pages/PerformerHomePage";
import VenueHomePage from "./Pages/VenueHomePage";

function App() {


  //this will have to be extracted to a global state
  const [performerView, setPerformerView] = useState(true)
  

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
