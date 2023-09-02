import Navbar from "./components/Navbar";
import Home from "./components/Home";
// importing all the components

import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// importing all packages for the calendar app

// import 'bootstrap/dist/css/bootstrap.min.css';
// importing bootstrap

const locales = {
  "en-CA": require("date-fns/locale/en-CA")
}
// initializing locales for Canada

const localizer = dateFnsLocalizer ({
  format, 
  parse, 
  startOfWeek,
  getDay,
  locales
})
// getting all the things from the package

const events = []
// initializing an empty array for all the events the user would put

function App() {
  // app function

  const [newEvent, setNewEvent] = useState({title: "", start: "", end: ""})
  const [allEvents, setAllEvents] = useState(events)
  // things needed for a new event

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]) 
  }
  // function to set new event

  return (  
  // returning order of web page

    <div className="App">
      <Navbar />
      {/* navbar component is first */}

      <Home />
      {/* home component is next */}

      <div className="calendar-heading">
        <h1 className="calendar-title">Calendar</h1>
        <h2 className="calendar-subheading">Add New Event</h2>
        <div className="calendar-input">
          <input className="calendar-add-title" type="text" placeholder="Add Title" style={{width: "20%", marginRight: "10px"}} 
            value={newEvent.title} onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
          />

          <DatePicker className="calendar-start-date" placeholderText="Start Date" style={{marginRight: "10px"}} selected={newEvent.start} onChange={(start) => setNewEvent({...newEvent, start})} />
          <DatePicker className="calendar-end-date" placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({...newEvent, end})} />

          <button className="calendar-add-event" style={{marginTop: "10px"}} onClick={handleAddEvent}>Add Event</button>
        </div>
      </div>
      {/* calendar heading with titles, inputs, and buttons */}

      <Calendar 
        localizer={localizer} 
        events={allEvents} 
        startAccessor="start" 
        endAccessor="end"
        className="calendar"
        style={{height: 700}}
      />
      {/* calendar package */}

    </div>
  );
}

export default App;
// exporting app component