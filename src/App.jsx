
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Rezister from './Components/Ligin Folder/Rezister';
import app from './firebase.config';
import LoginForm from './Components/Ligin Folder/LoginForm';
import Navbar from './Components/Navbar/Navbar';
import Layoutone from './Components/Layouts/Layoutone';
import Home from './Components/Pages/Home';
import PinNotepage from './Components/Pages/PinNotepage';
import BinNotepage from './Components/Pages/BinNotepage';
import Allnotespage from './Components/Pages/Allnotespage';




function App() {

  const myRoute= createBrowserRouter(
    createRoutesFromElements(
      <Route>
        
        <Route path='/register' element={<Rezister/>}/> 
        <Route path='/login' element={<LoginForm/>}/>

        <Route path='/' element={<Layoutone/>}  >
          <Route index element={<Home/>}/>
          <Route path='/pin' element={<PinNotepage/>}/>
          <Route path='/bin' element={<BinNotepage/>}/>
          <Route path='/allnote' element={<Allnotespage/>}/>
        </Route>
        
      </Route>
    )
  )

  return (
    <>
     <RouterProvider router={myRoute}/>
     <ToastContainer />
    </>
  )
}

export default App
