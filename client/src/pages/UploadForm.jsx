import React from 'react'
import question from '../util/problemData.js'
import { useSelector, useDispatch } from 'react-redux';
import { next, prev } from '../Features/ProblemForm/flowSlice.js';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Skleton from '../components/skeleton/formskeleton.jsx';
import axios from 'axios';
import Title from '../components/Upload/Title.jsx';
import Description from '../components/Upload/Description.jsx';
import Dificulty from '../components/Upload/Dificulty.jsx';
import Constraints from '../components/Upload/Constraints.jsx';
import Topics from '../components/Upload/Topics.jsx';
import Example from '../components/Upload/Example.jsx';
function UploadForm() {
    let idx = useSelector((state) => state.flow.value);
    let problem = useSelector((state) => state.problem);
    let dispatch = useDispatch();

    const handleSubmit = async () => {
        try {
            let res = await axios.post("http://localhost:4000/property", property);
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "90vh", overflow:"scroll" }}>

                <Box width={"100%"}>
                    <Typography align='center' margin={"40px"} sx={{fontWeight:"500"}} variant='h2'>{question[idx]}</Typography>

                    <Box width={"100%"}>
                            {idx === 0 && <Title problem={problem} />}
                            {idx === 1 && <Description problem={problem} />}
                            {idx === 2 && <Constraints problem={problem} />}
                            {idx === 3 && <Dificulty problem={problem} />}
                            {idx === 4 && <Topics problem={problem} />}
                            {idx === 5 && <Example problem={problem} />}

                    </Box>
                    <Stack spacing={12} sx={{ my: "24px" }} direction={"row"} justifyContent={"center"}>
                        <Button size='large' variant='contained' disabled={idx === 0} onClick={() => { dispatch(prev()) }}>Prev</Button>
                        {idx!=6?<Button size='large' sx={{bgcolor:"#C967F5"}} variant='contained' onClick={() => { dispatch(next()) }}>Next</Button>:<Button size='large' variant='contained' onClick={handleSubmit}>Submit</Button>}
                    </Stack>
                </Box>
            </Container>
        </>
    )
}

export default UploadForm