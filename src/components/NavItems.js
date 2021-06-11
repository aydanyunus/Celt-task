import React from 'react';
import { Link } from 'react-router-dom';


const NavItems = ({ items }) => {
    return (
        items.map((item, index) => {
            const Icon = item.icon
            return (
                <div className='nav-item' key={index}>
                    <div className='nav-icon'>
                        <Link to='/'>
                            <Icon />
                        </Link>
                    </div>
                    <div className='nav-text'>
                        <Link to='/'>
                            {item.title}
                        </Link>
                    </div>
                </div>
            )
        })


    )
}

export default NavItems;