import React from 'react'
import question from '../util/problemData.js'
import { useSelector, useDispatch } from 'react-redux';
import { next, prev } from '../Features/ProblemForm/flowSlice.js';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Skleton from '../components/skeleton/formskeleton.jsx';
import axios from 'axios';
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
    const Title = React.lazy(() => import('../components/Upload/Title.jsx'));

    return (
        <>
            <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "90vh" }}>

                <Box>
                    <Typography align='center' margin={"40px"} variant='h4'>{question[idx]}</Typography>

                    <Box width={"100%"}>
                        <React.Suspense fallback={<Skleton/>}>
                            {idx === 0 && <Title problem={problem} />}
                        </React.Suspense>
                    </Box>
                    <Stack spacing={12} sx={{ my: "24px" }} direction={"row"} justifyContent={"center"}>
                        <Button size='large' variant='contained' disabled={idx === 0} onClick={() => { dispatch(prev()) }}>Prev</Button>
                        {idx!=8?<Button size='large' sx={{bgcolor:"#C967F5"}} variant='contained' onClick={() => { dispatch(next()) }}>Next</Button>:<Button size='large' variant='contained' onClick={handleSubmit}>Submit</Button>}
                    </Stack>
                </Box>
            </Container>
        </>
    )
}

export default UploadForm