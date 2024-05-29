import React from 'react';
import Logo from '../assets/Logo.svg';
import { NavLink, useLocation } from 'react-router-dom';
import {
  AssessmentOutlined as DashboardIcon,
  Create as TestsIcon,
  DescriptionOutlined as ProblemsIcon,
  OndemandVideoOutlined as CoursesIcon,
  EmojiEventsOutlined as LeaderboardIcon,
  PlayCircleFilledWhiteOutlined as PlaygroundIcon
} from '@mui/icons-material';

const navItems = [
  { path: '/dashboard', icon: <DashboardIcon />, label: 'Dashboard' },
  { path: '/playground', icon: <PlaygroundIcon />, label: 'Playground' },
  { path: '/tests', icon: <TestsIcon />, label: 'Tests' },
  { path: '/problems', icon: <ProblemsIcon />, label: 'Problems' },
  { path: '/courses', icon: <CoursesIcon />, label: 'Courses' },
  { path: '/leaderboard', icon: <LeaderboardIcon />, label: 'Leaderboard' },
];

const Sidebar = () => {
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
        {navItems.map(({ path, icon, label }) => (
          <NavLink key={path} to={path} className={getLinkClasses(path)}>
            <span className='mr-4'>{icon}</span>
            <span>{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Sidebar;
