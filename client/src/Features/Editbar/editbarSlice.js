import { Editor } from '@monaco-editor/react';
import { createSlice } from '@reduxjs/toolkit'
import { boilerPlate } from '../../util/editorview';

const initialState = {

    editorView: {
        theme: 'vs-dark',
        language: 'javascript',
        boilerPlate: `// Javascript code
console.log('Hello World');`,
    }
}

export const editbarSlice = createSlice({
    name: 'editbar',
    initialState,
    reducers: {
        changeTheme: (state, action) => {
            state.editorView.theme = action.payload;
        },
        changeLanguage: (state, action) => {
            state.editorView.language = action.payload;
        },
        changeBoilerPlate:(state,action)=>{
            state.editorView.boilerPlate = action.payload;
        }
    },
})

export const { changeTheme, changeLanguage, changeBoilerPlate} = editbarSlice.actions

export default editbarSlice.reducer;
