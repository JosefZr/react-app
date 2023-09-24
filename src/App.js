import { Routes,Route,Link } from "react-router-dom";
import Home from "./pages/home";
import Html from "./pages/html";
import Css from "./pages/css";
import Javascript from "./pages/javascript";

function App() {
  return (
<>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/html" element={<Html/>}></Route>
    <Route path="/css" element={<Css/>}></Route>
    <Route path="/javascript" element={<Javascript/>}></Route>
  </Routes>
</>
  );
}
export default App;
