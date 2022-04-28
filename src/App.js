import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Common/Footer/Footer';
import Header from './Components/Common/Header/Header';
import Home from './Components/Home/Home';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/login' element={<Login></Login>} > </Route>
        <Route path='/register' element={<Register></Register>} ></Route>
        <Route path='/inventory' element={<Inventory></Inventory>} ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
