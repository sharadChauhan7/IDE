import React from 'react'
import Editor from '@monaco-editor/react';
import Editbar from '../components/Editbar';
import { useSelector,useDispatch } from 'react-redux'
import { changeBoilerPlate } from '../Features/Editbar/editbarSlice';

function Playground() {
    const editor = React.useRef(null);
   const dispatchEvent = useDispatch();
    function handleEditorDidMount(_editor, monaco) {
        editor.current = _editor;
        _editor.focus();
    }
    let view = useSelector(state=>state.editbar.editorView);
    // Update Boiler plate code when user edits the code
    function handleEditorChange(value, event) {
        // console.log(value);
        dispatchEvent(changeBoilerPlate(value));
    }
  return (
    <div className='w-4/5 h-full'>
        {/* Edit baar */}
        <Editbar />
        {/* Editor */}
        <Editor
            height="65vh"
            theme={view.theme}
            language={view.language}
            value={view.boilerPlate}
            onMount={handleEditorDidMount}
            className='w-full h-full'
            onChange={handleEditorChange}
        />

        {/* Outpur Window */}
        <div className='w-full h-[30vh] bg-gray-800 text-white'>
            Output Window
          </div>
    </div>
  )
}

export default Playground