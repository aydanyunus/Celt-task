import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as RiBar from 'react-icons/ri';


export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/',
        icon: <AiIcons.AiOutlineHome />,
        cName: 'nav-text'
    },
    {
        title: 'Exam Results',
        path: '/results',
        icon: <RiBar.RiBarChartBoxFill />,
        cName: 'nav-text'
    },
    {
        title: 'Speakings',
        path: '/speakings',
        icon: <FaIcons.FaMicrophone />,
        cName: 'nav-text'
    }
]
