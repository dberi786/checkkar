import { configureStore } from '@reduxjs/toolkit'
import navbarReducer from "../features/navbar/sidebar"
export default configureStore({
  reducer: {
    navbar:navbarReducer,
  }
})