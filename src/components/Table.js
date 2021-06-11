import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';


const Table = ({ tabledata }) => {

    const [search, setSearch] = useState('');
    const handleSearch = (event) => {
        setSearch(event.target.value)
    }
    let filteredTable = tabledata.filter((tdata) => {
        return (
            tdata.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
    })
    return (
        <div className='table-wrapper'>
            <h3>Exam Results</h3>
            <div className='search-box-wrapper'>
                <div className='search-box'>
                    <input type="text"
                        placeholder='Search'
                        value={search}
                        onChange={handleSearch}
                    />
                    <button type="submit" className="searchButton">
                        <AiIcons.AiOutlineSearch />
                    </button>
                </div>
            </div>

            <table
                id='table'
                className='table table-sm-responsive table-xs-responsive'
            >
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Date</th>
                        <th scope="col">Result</th>
                        <th scope="col">Points</th>
                        <th scope="col">Classes</th>
                        <th scope="col">Time</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredTable.map((tItem, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{tItem.name}</th>
                                <td>{tItem.date}</td>
                                <td>

                                    <span className={tItem.points >= 65 ? 'result-passed' : 'result-failed'}>
                                        {
                                            tItem.points >= 65 ?
                                                'passed' :
                                                'failed'
                                        }
                                    </span>
                                </td>
                                <td>{tItem.points}</td>
                                <td>{tItem.classes}</td>
                                <td>{tItem.time}</td>
                                <td>
                                    <span className='view-result'>
                                        <Link to='/'>
                                            <AiIcons.AiFillEye />
                                        </Link>
                                    </span>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>

    )
}
export default Table;