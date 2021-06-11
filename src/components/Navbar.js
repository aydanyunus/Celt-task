import React, { useEffect, useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import { Link } from 'react-router-dom';
import logo from '../logo-letter-1.png';
import flag from '../US.png';



import './Navbar.css';


const Navbar = () => {
    const [click, setClick] = useState(false);
    const [mobMenu, setmobMenu] = useState(true);

    const handleClick = () => setClick(!click);

    const showMobileMenu = () => {
        if (window.innerWidth > 960) {
            setmobMenu(false)
        } else {
            setmobMenu(true)
        }
    }

    useEffect(() => {
        showMobileMenu()
    }, [])


    window.addEventListener('resize', showMobileMenu)

    return (
        <>
            {
                mobMenu ?
                    <nav className='navbar' id='navbar'>
                        <div className='navbar-wrapper'>
                            <div className='navbar-logo'>
                                <Link to='/'>
                                    <img src={logo} alt='logo'/>
                                </Link>
                            </div>
                            <div className='mobile-btn' onClick={handleClick}>
                                <span>
                                    <AiIcons.AiOutlineMenu />
                                </span>
                            </div>

                        </div>
                    </nav>
                    :
                    null
            }
            {
                click ?
                    <div className='mobile-menu-wrapper'>

                        <div className='close-btn' onClick={handleClick}>
                            <span>
                                <AiIcons.AiOutlineClose />
                            </span>
                        </div>
                        <div className='mobile-menu'>
                            <ul>
                                {SidebarData.map((item, index) => {
                                    return (
                                        <li key={index} className={item.cName}>
                                            <Link to={item.path} onClick={handleClick}>
                                                {item.icon}
                                                <span>
                                                    {item.title}
                                                </span>
                                            </Link>

                                        </li>
                                    )
                                })}

                            </ul>
                        </div>
                    </div>
                    :
                    null
            }

            <div className='header' id='header'>
                <div className="profile">
                    <span className='flag'>
                        <img src={flag} alt='UsA flag'/>
                    </span>
                    <span className='light-span'>Hi,</span>
                    <span className='bold-span'>Əli Kərimli </span>
                    <span className='profile-name'>Ə</span>
                </div>
            </div>
       
        </>

    )
}

export default Navbar;