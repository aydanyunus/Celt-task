import React from 'react';
import * as IoIcons from 'react-icons/io';
import { Link, NavLink } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Sidebar.css';
import logo from '../logo-letter-1.png';


const Sidebar = ({sidebar, showSidebar}) => {
  


    return (
        <nav className={sidebar ? 'nav-menu' : 'nav-menu-active'}>
            <div className='menu-top'>
                <div className='logo'>
                <img src={logo}  alt='logo'/>

                </div>
                <div className='navbar-toggle'>
                    {
                        sidebar ?
                            <Link to='#' onClick={showSidebar} className='menu-bars'>
                                <IoIcons.IoIosArrowForward />
                            </Link>
                            :
                            <Link to='#' onClick={showSidebar} className='menu-bars'>
                                <IoIcons.IoIosArrowBack />
                            </Link>
                    }
                   
                </div>
             
            </div>
            {
                        sidebar ?
                        null 
                        :
                        <ul className='nav-menu-items'>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={`${item.cName}`} >
                                    <NavLink to={item.path} >
                                        {item.icon}
                                        <span>
                                            {item.title}
                                        </span>
                                    </NavLink>
        
                                </li>
                            )
                        })}
                    </ul>
                    }
          
        </nav>
    )
}
export default Sidebar;