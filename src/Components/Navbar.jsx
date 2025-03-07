import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {

  const {allTodos} = useSelector(state => state.todos)

  return (

    <>
      <nav className='bg-blue-500 p-4 justify-between flex '>
      <h1 className='text-lg text-white font-bold uppercase'>Redux-Todo</h1>
      <h1 className='text-lg text-white font-bold'>Count : {allTodos.length}</h1>
    </nav>
    </>
  )
}

export default Navbar
