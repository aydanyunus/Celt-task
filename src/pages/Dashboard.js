import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import '../styles/Dashboard.css';
import { Link } from 'react-router-dom';
import NavItems from '../components/NavItems';



const Dashboard = () => {
    const items = [
        { id: 1, icon: AiIcons.AiFillCalendar, title: 'My Check-In' },
        { id: 2, icon: AiIcons.AiFillBank, title: 'Take an Exam' },
        { id: 3, icon: AiIcons.AiOutlineBarChart, title: 'Exam Results' },
        { id: 4, icon: FaIcons.FaBookOpen, title: 'Classes' },
        { id: 5, icon: AiIcons.AiFillBank, title: 'Home Work' },
        { id: 6, icon: FaIcons.FaEdit, title: 'HW Results' },
        { id: 7, icon: AiIcons.AiFillFilePdf, title: 'Resources' },
        { id: 8, icon: FaIcons.FaMicrophone, title: 'Speakings' },
        { id: 9, icon: AiIcons.AiFillStar, title: 'Speakings Reviews' },
        { id: 10, icon: FaIcons.FaHeadphones, title: 'Listings' },
        { id: 11, icon: AiIcons.AiFillFilePdf, title: 'Essays' },
        { id: 12, icon: AiIcons.AiFillStar, title: 'Essays Reviews' },
    ]
    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-list">
                    <li className="breadcrumb-item"><a href="/">Dashboard</a></li>
                    <AiIcons.AiOutlineHome />
                    <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                </ol>
            </nav>
            <div className='dashboard'>
                <div className='dashboard-wrapper'>
                    <div className='dashboard-top'>
                        <div className='item'>
                            <div className='item-heading'>
                                <h1>HomeWork TODO</h1>
                            </div>
                            <div className='item-content'>
                                <ul>
                                    <li>

                                        <a href='/'>HW U4 L3</a>
                                        <span>CELT English A2</span>
                                    </li>
                                    <li>
                                        <a href='/'>HW U2 L3</a>
                                        <span>CELT English A2</span>
                                    </li>
                                </ul>

                            </div>
                            <div className='item-btn'>
                                <Link to='/results'>
                                    view all
                                </Link>
                            </div>

                        </div>
                        <div className='item'>
                            <div className='item-heading'>
                                <h1>Essay Reviews</h1>
                            </div>
                            <div className='item-content item-content-essay'>
                                <ul>
                                    <li>
                                        <div className='essay-content'>
                                            <span className='line'></span>
                                            <span className='square'></span>
                                            <a href='/'>HW U4 L3</a>
                                        </div>

                                    </li>
                                    <li>
                                        <div className='essay-content'>
                                            <span className='line'></span>
                                            <span className='square'></span>
                                            <a href='/'>HW U4 L3</a>
                                        </div>

                                    </li>
                                    <li>
                                        <div className='essay-content'>
                                            <span className='line'></span>
                                            <span className='square'></span>
                                            <a href='/'>HW U4 L3</a>
                                        </div>

                                    </li>
                                    <li>
                                        <div className='essay-content'>
                                            <span className='line'></span>
                                            <span className='square'></span>
                                            <a href='/'>HW U4 L3</a>
                                        </div>

                                    </li>
                                </ul>

                            </div>
                            <div className='item-btn'>
                                <Link to='/results'>
                                    view all
                                </Link>
                            </div>

                        </div>
                        <div className='item'>
                            <div className='item-heading'>
                                <h1>Speaking Reviews</h1>
                            </div>
                            <div className='item-content item-content-speaking'>
                                <ul>
                                    <li>
                                        <div className='speaking-content'>
                                            <span className='username'>ƏK</span>
                                            <a href='/'>HW U4 L3</a>
                                        </div>

                                    </li>
                                    <li>
                                        <div className='speaking-content'>
                                            <span className='username'>ƏK</span>
                                            <a href='/'>HW U4 L3</a>
                                        </div>

                                    </li>
                                    <li>
                                        <div className='speaking-content'>
                                            <span className='username'>ƏK</span>
                                            <a href='/'>HW U4 L3</a>
                                        </div>

                                    </li>
                                    <li>
                                        <div className='speaking-content'>
                                            <span className='username'>ƏK</span>
                                            <a href='/'>HW U4 L3</a>
                                        </div>
                                        <div className='date'>
                                            <span>01:13</span>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                            <div className='item-btn'>
                                <Link to='/results'>
                                    view all
                                </Link>
                            </div>

                        </div>
                    </div>
                    <div className='dashboard-bottom'>
                        <NavItems
                            items={items}
                        />


                    </div>
                </div>
            </div>
        </>

    )
}
export default Dashboard;