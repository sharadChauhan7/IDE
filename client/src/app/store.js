import { configureStore } from '@reduxjs/toolkit'
import editbarReducer from '../Features/Editbar/editbarSlice'
export const store = configureStore({
  reducer: {
    // Define a top-level state field named `editbar`, handled by `editbarReducer`
    editbar: editbarReducer,
  },
});