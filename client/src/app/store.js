import { configureStore } from '@reduxjs/toolkit'
import editbarReducer from '../Features/Editbar/editbarSlice'
import problemReducer from '../Features/ProblemForm/problemSlice'
import flowReducer from '../Features/ProblemForm/flowSlice'
export const store = configureStore({
  reducer: {
    // Define a top-level state field named `editbar`, handled by `editbarReducer`
    editbar: editbarReducer,
    // Define a top-level state field named `problem`, handled by `problemReducer`
    problem: problemReducer,
    // Define a top-level state field named `flow`, handled by `flowReducer`
    flow: flowReducer,
  },
});