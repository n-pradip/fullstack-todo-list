import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import api from '../api/api_root';

const Table = () => {
    const navigate = useNavigate();
    const [apidata, setApiData] = useState([]);

    useEffect(() => {
        getAllTodo();
    }, []);

    const getAllTodo = () => {
        try {
            api.get('/').then((response) => {
                setApiData(response.data);
            })
        } catch (error) {
            console.log(error)
        }
    };

    const deleteTodo = (id) => {
        api.delete(`/${id}/`).then((response) => {
            getAllTodo()

        }).catch((error) => {
            console.log(error)

        })
    };
    const updateTodo = (id) => {
        navigate(`/todo/${id}`)

    }

    const tableHeadStyle = 'p-3 font-semibold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell'

    const mobileViewTableHeadingStyle = 'lg:hidden absolute top-0 left-0 bg-blue-200 px-3 py-1 text-xs font-bold uppercase'
    
    return (
        <div className="container mx-auto my-10 px-10 sm:px-10 md:px-20 lg:px-0">
            <table className="border-collapse w-full">
                <thead>
                    <tr>
                        <th className={tableHeadStyle}>Sn.</th>
                        <th className={tableHeadStyle}>Title</th>
                        <th className={tableHeadStyle}>Description</th>
                        <th className={tableHeadStyle}>Status</th>
                        <th className={tableHeadStyle}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        apidata.map((item, index) => {
                            return (
                                <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0" key={index}>
                                    <td className="w-full lg:w-auto px-5 py-6 lg:py-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                        <span className={mobileViewTableHeadingStyle}>Sn.</span>
                                        {++index}
                                    </td>
                                    <td className="w-full lg:w-auto px-5 py-6 lg:py-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                        <span className={mobileViewTableHeadingStyle}>Title</span>
                                        {item.title}
                                    </td>
                                    <td className="w-full lg:w-auto px-5 py-6 lg:py-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                        <span className={mobileViewTableHeadingStyle}>Description</span>
                                        {item.description}
                                    </td>
                                    <td className="w-full lg:w-auto px-5 py-7 lg:py-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                                        <span className={mobileViewTableHeadingStyle}>Status</span>
                                        {(item.status ?
                                            <span className="rounded bg-red-400 py-1 px-3 text-xs font-bold">Completed</span> :
                                            <span className="rounded bg-green-500 py-1 px-3 text-xs font-bold">Active</span>
                                        )}

                                    </td>
                                    <td className="w-full lg:w-auto px-5 py-7 lg:py-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                        <span className={mobileViewTableHeadingStyle}>Actions</span>
                                        <button onClick={() => { updateTodo(item.id) }} className="focus:outline-none text-white bg-yellow-500 hover:bg-yellow-600 font-medium rounded text-sm px-5 py-1.5 mr-2 mb-2">Update</button>
                                        <button onClick={() => { deleteTodo(item.id) }} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 font-medium rounded text-sm px-5 py-1.5 mr-2 mb-2">Remove</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table