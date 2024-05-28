import React from 'react'
import Logo from '../assets/Logo.svg'
import {Link} from 'react-router-dom'
import { NavLink, useLocation } from 'react-router-dom';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import CreateIcon from '@mui/icons-material/Create';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';

function Sidebar() {
  const location = useLocation();

  const getLinkClasses = (path) => {
    const baseClasses = 'flex justify-start w-3/6 text-lg font-normal text-black hover:text-[#C967F5]';
    const activeClasses = ' text-[#c967f5]';
    return location.pathname === path ? `${baseClasses} ${activeClasses}` : baseClasses;
  };

  return (
    <nav className='border-2 h-screen w-1/5'>
        {/* Header */}
        <div className='py-10 bg-transparent'>
            <NavLink to='/' className='flex justify-center items-center'>
              <img src={Logo} alt="Logo" />
              <p className='text-[#C967F5] text-4xl flex flex-col font-semibold'>
                My <span className='text-[#C967F5]'>Code</span>
              </p>
            </NavLink>
        </div>
        {/* Navigation */}
        <div className='flex flex-col justify-center items-center gap-8'>
            <NavLink to='/dashboard' className={getLinkClasses('/dashboard')}>
              <span className='mr-4'><AssessmentOutlinedIcon/></span>
              <span>Dashboard</span>
            </NavLink>
            <NavLink to='/tests' className={getLinkClasses('/tests')}>
              <span className='mr-4'><CreateIcon/></span>
              <span>Tests</span>
            </NavLink>
            <NavLink to='/problems' className={getLinkClasses('/problems')}>
              <span className='mr-4'><DescriptionOutlinedIcon/></span>
              <span>Problems</span>
            </NavLink>
            <NavLink to='/courses' className={getLinkClasses('/courses')}>
              <span className='mr-4'><OndemandVideoOutlinedIcon/></span>
              <span>Courses</span>
            </NavLink>
            <NavLink to='/leaderboard' className={getLinkClasses('/leaderboard')}>
              <span className='mr-4'><EmojiEventsOutlinedIcon/></span>
              <span>Leaderboard</span>
            </NavLink>
        </div>
    </nav>
  );
}

export default Sidebar;