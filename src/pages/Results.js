import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import '../styles/Results.css';
import Table from '../components/Table';
import Pagination from '../components/Pagination';

const Results = () => {
    const tabledata = [
        { id: 1, name: 'B1+End of a course A', date: '19/25/21', points: 30, classes: 'CELT English B1+', time: '6 min' },
        { id: 2, name: 'A1 Unit 1A', date: '19/25/21', points: 45, classes: 'CELT English B1+', time: '6 min' },
        { id: 3, name: 'B1+End of a course A', date: '19/25/21', points: 30, classes: 'CELT English B1+', time: '6 min' },
        { id: 4, name: 'B1+End of a course A', date: '19/25/21', points: 70, classes: 'CELT English B1+', time: '6 min' },
        { id: 5, name: 'B1+End of a course A', date: '19/25/21', points: 65, classes: 'CELT English B1+', time: '6 min' },
        { id: 6, name: 'B1+End of a course A', date: '19/25/21', points: 30, classes: 'CELT English B1+', time: '6 min' },
        { id: 7, name: 'B1+End of a course A', date: '19/25/21', points: 30, classes: 'CELT English B1+', time: '6 min' },
        { id: 8, name: 'A1 Unit 1A', date: '19/25/21', points: 45, classes: 'CELT English B1+', time: '6 min' },
        { id: 9, name: 'B1+End of a course A', date: '19/25/21', points: 30, classes: 'CELT English B1+', time: '6 min' },
        { id: 10, name: 'B1+End of a course A', date: '19/25/21', points: 70, classes: 'CELT English B1+', time: '6 min' },
        { id: 11, name: 'B1+End of a course A', date: '19/25/21', points: 65, classes: 'CELT English B1+', time: '6 min' },
        { id: 12, name: 'B1+End of a course A', date: '19/25/21', points: 30, classes: 'CELT English B1+', time: '6 min' },
        { id: 13, name: 'A2 Unit', date: '19/25/21', points: 90, classes: 'CELT English A2', time: '6 min' },
        { id: 14, name: 'A2 Unit', date: '19/25/21', points: 30, classes: 'CELT English A2', time: '2 min' },

    ]



    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage] = useState(12);
    const indexOfLastData = currentPage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    const currentData = tabledata.slice(indexOfFirstData, indexOfLastData);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-list">
                    <li className="breadcrumb-item"><a href="/results">Exam Results</a></li>
                    <AiIcons.AiOutlineHome />
                    <li className="breadcrumb-item active" aria-current="page">Exam Results</li>
                </ol>
            </nav>
            <div className='results-wrapper'>
                <Table
                    tabledata={currentData}
                    currentPage={currentPage}
                    dataPerPage={dataPerPage}
                    setCurrentPage={setCurrentPage}
                />
                <div className='table-footer'>
                    <div className='current-page'>
                        <span>{currentPage} of {dataPerPage} of {tabledata.length}</span>
                    </div>
                    <div className='pagination'>
                        <Pagination
                            dataPerPage={dataPerPage}
                            totalData={tabledata.length}
                            paginate={paginate}
                        />
                    </div>
                </div>

            </div>
        </>

    )
}
export default Results;