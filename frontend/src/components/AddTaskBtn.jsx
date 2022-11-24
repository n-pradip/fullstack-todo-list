import React from 'react'
import { Link } from 'react-router-dom'
import { BsPencilFill } from "react-icons/bs";

const AddTaskBtn = () => {
    return (
        <div className='my-5 flex justify-end'>
            <Link to="/todo" className="add_task_btn inline-block justify-center items-center text-white bg-blue-500 py-2 px-5 rounded-sm">
                <div className="add_task_btn">
                    <div className="inline-block px-2">
                    <BsPencilFill/>
                    </div>
                    Add task
                </div>
            </Link>
        </div>
    )
}

export default AddTaskBtn