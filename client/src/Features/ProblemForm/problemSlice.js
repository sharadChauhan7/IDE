import { createSlice } from '@reduxjs/toolkit'

/* Schema
const ProblemSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    constraints:{
        type:[String],
        required: true
    },
    difficulty: {
        type: String,
        required: true,
        enum:['Easy', 'Medium', 'Hard']
    },
    topics: {
        type: [String],
        required: true
    },
    examples:{
        type:[{
            input:{
                type:String,
                required:true
            },
            output:{
                type:String,
                required:true
            },
            explaination:{
                type:String,
                required:true
            }
        }],
        required: true
    },
    follow_up:{
        type: String,
        required: true
    }
});
 */

const initialState = {
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
            state.title = action.payload;
        },
        setDescription: (state, action) => {
            state.description = action.payload;
        },
        setConstraints: (state, action) => {
            state.constraints = action.payload;
        },
        setDifficulty: (state, action) => {
            console.log(action.payload);
            state.difficulty = action.payload;
        },
        setTopics: (state, action) => {
            state.topics = action.payload;
        },
        setExamples: (state, action) => {
            state.examples = action.payload;
        },
        setFollowUp: (state, action) => {
            state.follow_up = action.payload;
        }
    }
});

export const { setTitle, setDescription, setConstraints, setDifficulty, setTopics, setExamples, setFollowUp } = problemSlice.actions

export default problemSlice.reducer