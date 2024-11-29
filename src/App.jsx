
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LoginForm from './Components/Ligin Folder/LoginForm'


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
    </>
  )
}

export default App
