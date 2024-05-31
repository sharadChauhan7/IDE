import React from 'react'
import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux'
import { changeLanguage, changeTheme, changeBoilerPlate } from '../Features/Editbar/editbarSlice';
import { lang, theme, boilerPlate } from '../util/editorview.js';
function Editbar({run}) {

    const theme1 = useSelector((state) => state.editbar.editorView.theme);
    const language = useSelector((state) => state.editbar.editorView.language);
    const dispatch = useDispatch();
    const handleLanguageChange = (selectedOption) => {
        dispatch(changeLanguage(selectedOption.value));
        dispatch(changeBoilerPlate(boilerPlate[selectedOption.value]));
    };

    const handleThemeChange = (selectedOption) => {
        dispatch(changeTheme(selectedOption.value));
    };

    return (
        <div className='w-full h-10 flex justify-start items-center'>
            <div className='w-full'>
                <div className='w-1/5 h-full float-left mr-5'>
                    <Select options={lang} value={lang.find((lang) => lang.value === language)} onChange={handleLanguageChange} className='w-full h-full rounded-lg text-black' />
                </div>
                <div className='w-1/5 h-full float-left'>
                    <Select options={theme} defaultValue={theme.find((theme) => theme.value === theme1)} onChange={handleThemeChange} className='w-full h-full' />
                </div>
            </div>
            {/* <div>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => {
                    dispatch(changeBoilerPlate(boilerPlate[language]));
                }}>Reset Code</button>
            </div> */}
            {/* Runn Code */}
            <div>
                <button className=' border-2 border-[#C967F5] rounded-3xl text-[#C967F5] hover:bg-[#C967F5] hover:text-white px-6 py-1  font-medium '
                onClick={run}>Run</button>
            </div>


        </div>
    )
}

export default Editbar