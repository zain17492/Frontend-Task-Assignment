
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './component/Navbar';
import CreateEmployee from './pages/CreateEmployee';
import UpdateEmployee from './pages/UpdateEmployee';
import ReadEmployee from './pages/ReadEmployee';


function App() {
  return (
    <div>
    
    <BrowserRouter>
       <Navbar/>
      <Routes>
        
        
        <Route path ="/" element={<Home/>}/>
        <Route path ="/createemployee" element={<CreateEmployee/>}></Route>
        <Route path ="/updateemployee/:id" element={<UpdateEmployee/>}></Route>
        <Route path ="/reademployee/:id" element={<ReadEmployee/>}></Route>
        
       
        </Routes>
      
      </BrowserRouter>
      </div>
    

  );
}

export default App;
