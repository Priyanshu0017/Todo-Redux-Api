import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector } from "react-redux";
import { edit, remove, removeTodo } from "../features/todos/todoSlice";

const Listgroupitem = ({ todo }) => {
  const dispatch = useDispatch()

  const {isSuccess} = useSelector(state => state.todos)

  const handleRemove = (id) => {
    dispatch(removeTodo(id))
    
     if(isSuccess){
      dispatch(remove(id))
     }
  };


  const handleEdit = (todo)=> {
    dispatch(edit(todo))
  }

  return (
    <>
      <li className="border-solid border-2 my-2 flex justify-between border-gray-300 shadow-sm p-3">
        <div>
          <h1 className="font-bold">Title : {todo.title}</h1>
          <p>Description : {todo.description}</p>
        </div>
        <span className="flex">
          <button className="border-slate-400 border-solid border-2 w-14 md:w-16 md:h-14"
          onClick={()=> handleEdit(todo)}>
            <FontAwesomeIcon className="text-yellow-600 " icon={faEdit} />
          </button>
          <button
            className=" border-slate-400 border-solid border-2 w-14 ml-2 md:h-14"
            onClick={() => handleRemove(todo._id)}
          >
            <FontAwesomeIcon className="text-red-600 " icon={faTrash} />
          </button>
        </span>
      </li>
    </>
  );
};

export default Listgroupitem;
