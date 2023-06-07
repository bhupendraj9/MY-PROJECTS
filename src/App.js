import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from './components/About'
import { Routes ,Route} from "react-router-dom";
import Footer from "./components/Footer";
import jsondata from "./jsondata";
import Cart from "./components/Cart";
import Watches from "./components/Watches";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
function App() {
   
   console.log(jsondata);
  return (

    <div>
     <Navbar></Navbar>
    <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/about" element={<About></About>}></Route>
    <Route path="/cart" element={<Cart></Cart>}></Route>
    <Route path="/watches" element={<Watches></Watches>}></Route>
    <Route path="/login" element={<Login></Login>}></Route>
     <Route path="/signup" element={<Signup></Signup>}></Route>
    </Routes>
    <Footer></Footer>
   
    </div>
  );
}

export default App;
