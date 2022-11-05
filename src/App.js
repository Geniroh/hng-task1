// import ProfileCard from "./components/ProfileCard";
// import IMG from "./images/Chibuzor.png";
// import SLACKIMG from './images/slack.png';
// import GITHUBIMG from './images/github.png';
// import './App.css';
// import { LinkCard } from "./components/LinkCard";
// import { Footer } from "./components/Footer";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Contact } from "./screens/Contact";
import { Home } from "./screens/Home";
import './App.css'

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
