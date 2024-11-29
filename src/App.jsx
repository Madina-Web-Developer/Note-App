
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LoginForm from './Components/Ligin Folder/LoginForm'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  const myRoute= createBrowserRouter(
    createRoutesFromElements(
      <Route>
        
        <Route path='/' element={<LoginForm/>}/>

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
