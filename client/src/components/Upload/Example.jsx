import React from 'react'
import { Stack, TextField, Fab } from '@mui/material';
import { useDispatch } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function Example({ problem }) {
    // To handle multiple constrains we are using an object of constraints
    let [example, setExample] = React.useState(problem.examples);
    console.log(example);

    let dispatch = useDispatch();

    function addExample(){
        if(example.length>=5) return;
        setExample([...example,{input:"",output:"",explaination:""}]);
    }
    function removeExample(){
        if(example.length<=1) return;
        setExample(example.slice(0,example.length-1));
    }
    // Handle change in constraints
    return (
        <>
        <Stack justifyContent={"center"} gap={"20px"} alignItems={"center"} className=' max-h-full py-5 overflow-y-scroll' >
            {/* Render Example object */}
            {example.map((ex, i) => {
                return (
                    <Stack key={i} alignItems={"center"} width={"80%"} className='border-2'  >
                        {/* Heading example 1*/}
                        <h1 className='text-xl font-medium text-left'>Example {i + 1}</h1>
                        <TextField
                            id="outlined-basic"
                            label="Input"
                            variant="outlined"
                            value={ex.input}
                            sx={{width:"100%",margin:"5px 0",border:"none"}}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Output"
                            variant="outlined"
                            value={ex.output}
                            sx={{width:"100%", margin:"5px 0"}}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Explaination"
                            variant="outlined"
                            value={ex.explaination}
                            sx={{width:"100%",margin:"5px 0"}}
                        />
                    </Stack>
                )
            })}

        </Stack>
            <div className='flex justify-center mt-4 gap-5'>
                <Fab color="secondary" aria-label="add" onClick={removeExample} >
                    <RemoveIcon />
                </Fab>
                <Fab color="secondary" aria-label="add" onClick={addExample}>
                    <AddIcon />
                </Fab>
            </div>
            </>
    )
}

export default Example