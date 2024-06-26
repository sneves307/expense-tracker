'use client'
import React, { useState } from 'react'
import { useBalance } from '../context/BalanceContext'
import { randomBytes } from 'crypto'
import Toast from './Toast'

function Action() {
    const [show, setShow] = useState(false);
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const [operator, setOperator] = useState('');
    const [toastVisible, setToastVisible] = useState(false);
    const [toastType, setToastType] = useState('');
    const [toastText, setToastText] = useState('');
    const { addBalanceItem } = useBalance();

    const handleAdd = () => {
        if (description && value && operator) {
            const newItem = {
                id: randomBytes(20).toString('hex'),
                description,
                value: parseFloat(value),
                operator
            };
            addBalanceItem(newItem);
            setShow(false);
            setDescription('');
            setValue('');
            setOperator('');
            showToast('success', 'Item added successfully');
        } else {
            showToast('danger', 'Please fill all fields');
        }
    };

    const showToast = (type: string, text: string) => {
        setToastType(type);
        setToastText(text);
        setToastVisible(true);
    };

    const hideToast = () => {
        setToastVisible(false);
    };

    return (
        <div className="container mx-auto flex-wrap px-8 py-2 font-semibold text-slate-100">
            <h3 className="mt-4">Action</h3>
            {show ? (
                <>
                    <h4 className="mt-2 mb-2">Description</h4>
                    <input type="text" name="description" id="description" onChange={(e) => setDescription(e.target.value)} className="bg-slate-100 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"/>

                    <h4 className="mt-2 mb-2">Value</h4>
                    <input type="text" name="value" id="value" onChange={(e) => setValue(e.target.value)} className="bg-slate-100 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"/>

                    <h4 className="mt-2 mb-2">Operation</h4>
                    <select name="operator" id="operator" onChange={(e) => setOperator(e.target.value)} className="bg-slate-100 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5">
                        <option value=""> Select an operation</option>
                        <option value="+"> + Add Money</option>
                        <option value="-"> - Take Money</option>
                    </select>
                    <div className="mt-8 flex-col justify-center items-center flex space-y-4">
                        <button type="button" onClick={handleAdd} className="w-full px-2 py-2 text-base font-medium text-center inline-flex items-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                            </svg>Add
                        </button>
                        <button type="button" onClick={() => setShow(false)} className="w-full px-2 py-2 text-base font-medium text-center inline-flex items-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                            </svg>Cancel
                        </button>
                    </div>
                </>
            ) : (
                <button type="button" onClick={() => setShow(true)} className="mt-4 w-full px-2 py-2 text-base font-medium text-center inline-flex items-center text-white bg-sky-700 rounded-lg hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5" />
                    </svg>
                    Add Item
                </button>
            )}
            {toastVisible && (
                <Toast type={toastType} text={toastText} isVisibleOption={true} onClose={hideToast} />
            )}
        </div>
    )
}

export default Action
