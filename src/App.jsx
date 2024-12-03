
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LoginForm from './Components/Ligin Folder/LoginForm'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Rezister from './Components/Ligin Folder/Rezister';



function App() {

  const myRoute= createBrowserRouter(
    createRoutesFromElements(
      <Route>
        
        <Route path='/' element={<Rezister/>}/> 

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
