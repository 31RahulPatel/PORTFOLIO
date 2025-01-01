import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProfileCard from "./Component/Profilecard/ProfileCard";

function App() {
  return (
    <Router basename="/PORTFOLIO"> {/* Replace 'your-repo-name' with the name of your GitHub repository */}
      <Routes>
        <Route path="/" element={<ProfileCard />} /> {/* Default Route */}
        <Route path="*" element={<ProfileCard />} /> {/* Catch-all for invalid paths */}
      </Routes>
    </Router>
  );
}

export default App;
