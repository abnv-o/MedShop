import Navbar from "./components/Navbar";
import Mainpage from "./Pages/Mainpage";
import Footer from "./components/Footer";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Loginpage from "./Pages/Loginpage";
import Adminpage from "./Pages/Adminpage";
import Catpage from "./Pages/Catpage";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/login" element={<Loginpage/>}/>
          <Route path="/adminpage" element={<Adminpage/>}/>
          <Route path="/catpage" element={<Catpage/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
