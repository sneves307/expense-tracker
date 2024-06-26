'use client'

import React, { useState } from 'react';
import { useBalance } from "../context/BalanceContext";

export default function HistoryBalance() {
    const { history } = useBalance();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;
    const totalPages = Math.ceil(history.length / itemsPerPage);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const currentItems = history.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="container mx-auto justify-start px-8 py-2 font-semibold">
            <h2 className="container mx-auto mb-4 mt-4 text-slate-100">History</h2>
            {history.length === 0 ? (
                <div className="container text-slate-100 justify-center items-center text-center">
                    <h2>No History</h2>
                </div>
            ) : (
                <>
                    {currentItems.map((item) => (
                        <div
                            className={`container rounded-lg mt-2 flex bg-slate-700 text-slate-100 p-2 ${item.operator === '+' ? 'border-l-4 border-l-green-500' : 'border-l-4 border-l-red-600'}`}
                            key={item.id}
                        >
                            <p className="flex-1">{item.description}</p>
                            <p className="flex-2">{item.operator + ' ' + item.value}</p>
                        </div>
                    ))}
                    <div className="flex justify-center mt-4">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index + 1}
                                onClick={() => handleClick(index + 1)}
                                className={`px-4 py-2 mx-1 ${index + 1 === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'} rounded-lg`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
