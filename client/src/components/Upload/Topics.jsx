import React from 'react'
import {  Stack, TextField } from '@mui/material'
import { useDispatch } from 'react-redux'
import { setTopics } from '../../Features/ProblemForm/problemSlice.js'
import Autocomplete from '@mui/material/Autocomplete';
import {topic} from '../../util/problemData.js';
function Topics({problem}) {
    let dispatch = useDispatch();
    function handelPrice(e){
      let tonumber=parseInt(e.target.value);
        dispatch(setPrice(tonumber));
    }
  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
        <Autocomplete
        multiple
        sx={{width: "80%"}}
        id="tags-standard"
        options={topic}
        getOptionLabel={(option) => option}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Topics"
            placeholder="Topics"
          />
        )}
      />
    </Stack>
  )
}

export default Topics