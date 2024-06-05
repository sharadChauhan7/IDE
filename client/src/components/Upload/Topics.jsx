import React from 'react'
import {  Stack, TextField } from '@mui/material'
import { useDispatch } from 'react-redux'
import { setTopics } from '../../Features/ProblemForm/problemSlice.js'
import Autocomplete from '@mui/material/Autocomplete';
import {topic} from '../../util/problemData.js';
function Topics({problem}) {
    let dispatch = useDispatch();

    const handleTopicsChange = (event, value) => {
        dispatch(setTopics(value));
    }
  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
        <Autocomplete
        multiple
        sx={{width: "80%"}}
        id="tags-standard"
        options={topic}
        getOptionLabel={(option) => option}
        value={problem.topics}
        onChange={handleTopicsChange}
        renderInput={(params) => {
          const { key, ...other } = params;
          return (<TextField
            {...other}
            key={key}
            variant="standard"
            label="Topics"
            placeholder="Topics"
          />)
        }}
      />
    </Stack>
  )
}

export default Topics