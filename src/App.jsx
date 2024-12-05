
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Rezister from './Components/Ligin Folder/Rezister';
import app from './firebase.config';
import LoginForm from './Components/Ligin Folder/LoginForm';
import Navbar from './Components/Navbar/Navbar';




function App() {

  const myRoute= createBrowserRouter(
    createRoutesFromElements(
      <Route>
        
        <Route path='/' element={<Rezister/>}/> 
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/navbar' element={<Navbar/>}/>

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
