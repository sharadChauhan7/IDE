import React from 'react'
import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux'
import { changeLanguage, changeTheme ,changeBoilerPlate} from '../Features/Editbar/editbarSlice';
import { lang, theme,boilerPlate } from '../util/editorview.js';
function Editbar() {

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
        <div className='w-full h-10 flex justify-start gap-10'>
            <div className='w-1/5 h-full float-left'>
                <Select options={lang} value={lang.find((lang) => lang.value === language)} onChange={handleLanguageChange} className='w-full h-full rounded-lg text-black' />
            </div>
            <div className='w-1/5 h-full float-left'>
                <Select options={theme} defaultValue={theme.find((theme) => theme.value === theme1)} onChange={handleThemeChange} className='w-full h-full' />
            </div>
        </div>
    )
}

export default Editbar