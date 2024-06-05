import { createSlice } from '@reduxjs/toolkit'
const initialState = localStorage.getItem('problem') ? JSON.parse(localStorage.getItem('problem')) : {
    title: "",
    description: "",
    constraints: {
        Constraint1: "",
        Constraint2: "",
    },
    difficulty: "Medium",
    topics: [],
    examples: [{input: "",output: "",explaination: ""},{input:"",output:"",explaination:""}],
    follow_up: "",
};

export const problemSlice = createSlice({
    name: "problem",
    initialState,
    reducers:{
        setTitle: (state, action) => {
            localStorage.setItem('problem', JSON.stringify(state));
            state.title = action.payload;
        },
        setDescription: (state, action) => {
            localStorage.setItem('problem', JSON.stringify(state));
            state.description = action.payload;
        },
        setConstraints: (state, action) => {
            localStorage.setItem('problem', JSON.stringify(state));
            state.constraints = action.payload;
        },
        setDifficulty: (state, action) => {
            localStorage.setItem('problem', JSON.stringify(state));
            state.difficulty = action.payload;
        },
        setTopics: (state, action) => {
            localStorage.setItem('problem', JSON.stringify(state));
            state.topics = action.payload;
        },
        setExamples: (state, action) => {
            localStorage.setItem('problem', JSON.stringify(state));
            console.log(action.payload);
            state.examples = action.payload;
        },
        setFollowUp: (state, action) => {
            localStorage.setItem('problem', JSON.stringify(state));
            state.follow_up = action.payload;
        }
    }
});

export const { setTitle, setDescription, setConstraints, setDifficulty, setTopics, setExamples, setFollowUp } = problemSlice.actions

export default problemSlice.reducer