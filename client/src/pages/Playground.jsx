import React from 'react'
import Editor from '@monaco-editor/react';
import Editbar from '../components/Editbar';
import { useSelector } from 'react-redux'
import axios from 'axios';

function Playground() {
    const editor = React.useRef(null);
    function handleEditorDidMount(_editor, monaco) {
        editor.current = _editor;
        _editor.focus();
    }
    // Get the user input from the editor
    let userInput = React.useRef({javascript: '',cpp:'',c:'',python:'',java:''});

    let view = useSelector(state=>state.editbar.editorView);
    // Update Boiler plate code when user edits the code
    
    function handleEditorChange(value, event) {
      userInput.current[view.language] = value;
    }
    let [output,setOutput] = React.useState('');
    async function runCode(){
        // Run the code
        console.log(userInput.current[view.language]|| view.boilerPlate);
        let code = userInput.current[view.language] || view.boilerPlate;
        let language = view.language;
        let res = await axios.post('http://localhost:4000/playground/run',{code,language});
        setOutput(res.data.output);
    }
  return (
    <div className='w-4/5 h-full'>
        {/* Edit baar */}
        <Editbar run={runCode} />
        {/* Editor */}
        <Editor
            height="65vh"
            theme={view.theme}
            language={view.language}
            value={userInput.current[view.language] || view.boilerPlate}
            onMount={handleEditorDidMount}
            className='w-full h-full'
            onChange={handleEditorChange}
        />

        {/* Input Output Window */}
        <div className='flex h-[30vh]'>
            {/* Output */}
            <div className='w-1/2 h-full'>
              {/* Style heading */}
              <h1 className='text-2xl h-1/6 text-center text-white rounded-lg bg-[#C967F5] '>Output</h1>
                <p className=' w-full h-full  p-5'>{output}</p>
            </div>
            {/* Input */}
            <div className='w-1/2 h-full'>
              {/* Style heading */}
              <h1 className='text-2xl h-1/6 text-center text-white rounded-lg bg-[#C967F5]'>Input</h1>
                <textarea name="input" id="input" className='w-full h-full '></textarea>
            </div>
          </div>
    </div>
  )
}

export default Playground