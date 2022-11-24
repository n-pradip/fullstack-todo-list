import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TodoList from './pages/TodoList'
import TodoCreationForm from './pages/TodoCreationForm'

const App = () => {
  return (  
    <div>
      <Routes>
        <Route path="/" element={<TodoList  />}/>
        <Route path="/todo/" element={<TodoCreationForm/>}/>
        <Route path="/todo/:id" element={<TodoCreationForm/>}/>
      </Routes>

    </div>
  )
}

export default App