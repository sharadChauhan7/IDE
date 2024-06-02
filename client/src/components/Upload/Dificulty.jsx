import { Box, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentNeutralOutlinedIcon from '@mui/icons-material/SentimentNeutralOutlined';
import SentimentDissatisfiedSharpIcon from '@mui/icons-material/SentimentDissatisfiedSharp';
import { useDispatch } from 'react-redux';
import { setDifficulty } from '../../Features/ProblemForm/problemSlice.js';

function Dificulty({problem}) {
    let difficulty=["Easy","Medium","Hard"];
    let dispatch=useDispatch();
  return (
    <>
    <Stack spacing={10} direction={"row"} flexWrap={"wrap"} justifyContent={"center"} alignItems={"center"}>
        {difficulty.map((item,index)=>{
            let style=problem.difficulty==item?{width:{md:250},height:{md:250},border:"2px solid #C967F5"}:{width:{md:250},height:{md:250}};
            return(
                <Paper key={index} elevation={3} sx={style} onClick={()=>{dispatch(setDifficulty(item))}} >
                    <Stack spacing={5} sx={style}direction={"column"} color={"#C967F5"} justifyContent={"center"} alignItems={"center"}>
                        {item==="Easy" && <SentimentSatisfiedAltOutlinedIcon sx={{fontSize:"4rem"}} />}
                        {item==="Medium" && <SentimentNeutralOutlinedIcon sx={{fontSize:"4rem"}} />}
                        {item==="Hard" && <SentimentDissatisfiedSharpIcon sx={{fontSize:"4rem"}} />}
                        <Typography variant='h5'>{item}</Typography>
                    </Stack>
                </Paper>
            );
        })}
    </Stack>
    </>
  )
}

export default Dificulty