import React, { useState } from 'react';

function SecondFormPage() {
    const [income, setIncome] = useState('');
    const [county, setCounty] = useState('');

    return (
        <div className="w-full max-w-2xl mx-auto mt-10">
            <div className="mb-6">
                {/* Progress bar and Title */}
                <div className="flex items-center mb-4">
                    <div className="flex-1">
                        <div className="w-full bg-gray-300 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style="width: 50%;"></div>
                        </div>
                    </div>
                </div>
                <h2 className="text-xl font-semibold text-gray-700">What is your household income?</h2>
            </div>
            {/* Form section */}
            <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">
                <div className="bg-blue-800 p-6 flex justify-between items-center">
                    <h2 className="text-white font-semibold text-2xl">Income</h2>
                    <i className="fas fa-check-circle text-white text-2xl"></i>
                </div>
                <form className="p-6 border-b-8 border-blue-800">
                    <div className="mb-6">
                        <label className="block text-gray-700 text-base font-bold mb-2" htmlFor="income">Household Income</label>
                        <input className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="income" type="text" pattern=".{5,7}" placeholder="Household Income" value={income} onChange={e => setIncome(e.target.value)} required />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-base font-bold mb-2" htmlFor="county">County</label>
                        <input className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="county" type="text" pattern=".{4,15}" placeholder="Dade County" value={county} onChange={e => setCounty(e.target.value)} required />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SecondFormPage;
