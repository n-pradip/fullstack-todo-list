import React from 'react'
import Table from '../components/Table'
import AddTaskBtn from '../components/AddTaskBtn'

const TodoList = () => {
  return (
    <div>
      <div className="m-5">
        <p className='text-center text-2xl font-bold text-balck'>Todo List</p>
        <div className="container mx-auto my-10 px-10 sm:px-10 md:px-20 lg:px-0">
          <Table />
          <AddTaskBtn />
        </div>
      </div>
    </div>
  )
}

export default TodoList