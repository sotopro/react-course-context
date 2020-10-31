import React from 'react'
import  { Link } from 'react-router-dom';

export const Heading = () => {
    return (
        <div>
            <div className="flex items-center mt-24 mb-10">
                <div className="flex-grow text-left px-4 py-2 m-2">
                    <h5 className="text-gray font-bold text-xl">Employee Listing</h5>
                </div>
            </div>
            <div className="flex-grow text-right px-4 py-2 m-2">
                <Link to="/add">
                    <button className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
                        <span className="pl-2">Add Employee</span>
                    </button>
                </Link>
            </div>
        </div>
    )
}