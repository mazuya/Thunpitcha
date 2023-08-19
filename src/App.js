import './App.css';
import Navbar from './component/Navbar';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Product from './component/Product/Product';
import Home from './component/Home/Home';
import Book from './component/Booking/Book';

function App() {
  return (
    <div className="App">
      
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path='/home' Component={Home}/>
        <Route exact path='/product' Component={Product}/>
        <Route exact path='/booking' Component={Book}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
