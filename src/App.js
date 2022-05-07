import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './Components/AddProduct/AddProduct';
import AllProducts from './Components/AllProducts/AllProducts';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Common/Footer/Footer';
import Header from './Components/Common/Header/Header';
import Home from './Components/Home/Home';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import Manage from './Components/Manage/Manage';
import NotFound from './Components/NotFound/NotFound';
import Register from './Components/Register/Register';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Update from './Components/Update/Update';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/login' element={<Login></Login>} > </Route>
        <Route path='/register' element={<Register></Register>} ></Route>
        <Route path='/addproduct' element={
          <RequireAuth>
          <AddProduct></AddProduct>
        </RequireAuth>
        } >
          
        </Route>
        <Route path='/inventory' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        } >
        </Route>
        <Route path='/update/:id' element={
          <RequireAuth>
            <Update></Update>
          </RequireAuth>
        } >
        </Route>
        <Route path='/manage' element={
          <RequireAuth>
            <Manage></Manage>
          </RequireAuth>
        } >
        </Route>
        <Route path='/blog' element={
          <RequireAuth>
            <Blog></Blog>
          </RequireAuth>
        } >
        </Route>
        <Route path='/allproducts' element={<AllProducts></AllProducts>} ></Route>
        <Route path='*' element={<NotFound></NotFound>} ></Route>
      </Routes>


          <Footer></Footer>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,64L48,101.3C96,139,192,213,288,208C384,203,480,117,576,117.3C672,117,768,203,864,234.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </div>
  );
}

export default App;
