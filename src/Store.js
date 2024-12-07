import { configureStore } from '@reduxjs/toolkit'
import  UserSlice  from './Components/Slice/UserSlice'

export default configureStore({
  reducer: {

    currentUser: UserSlice,
  },
})