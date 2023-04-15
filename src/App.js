import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home';
import Bookmark from './Pages/Bookmark';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route path="/Bookmarks" element={<Bookmark />} />
      </Routes>
    </Router>
  );
}

export default App;
