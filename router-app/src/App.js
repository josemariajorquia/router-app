import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";

function Home() {
  return (
    <div className="page">
      <h1>Welcome!</h1>
      <p>Welcome to my React app!</p>
      <p>Please use the navigation above to explore the pages.</p>
      <p>Enjoy your stay!</p>
    </div>
  );
}

function About() {
  return (
    <div className="page">
      <h1>About </h1>
      <p>I did this project using React and React Router.</p>
      <p>Final Hands-On Quiz for ITPS205.</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="page">
      <h1>Contact </h1>
      <p>Want to get in touch? Send me a message!</p>
      <p>Email: jomarjorquia5@gmail.com</p>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <span className="logo">Joms Router-App</span>
      <div className="nav-links">
        <Link to="/" className="nav-btn">Home</Link>
        <Link to="/about" className="nav-btn">About</Link>
        <Link to="/contact" className="nav-btn">Contact</Link>
      </div>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;