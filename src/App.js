import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import CalenderHeader from "./Component/CalenderHeader";
import EventModal from "./Component/EventModal";
import Month from "./Component/Month";
import SlideBar from "./Component/SlideBar";
import GlobalContext from "./context/GlobalContext";
import { getMonth } from "./util";

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  return (
    <React.Fragment>
      {showEventModal && <EventModal />}

      <div className="h-screen flex flex-col">
        <CalenderHeader />
        <div className="flex flex-1">
          <SlideBar />
          <Month month={currentMonth} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
