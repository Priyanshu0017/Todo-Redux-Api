import React, { useEffect } from "react";
import Listgroupitem from "./Listgroupitem";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../features/todos/todoSlice";

const Listgroup = () => {
  const { allTodos , isLoading , isError} = useSelector((state) => state.todos);

  const dispatch = useDispatch()


  useEffect(()=>{

    dispatch(getTodos())

  },[])

  if(isLoading){
    return (
      <h1 className="my-5 md:my-8 text-center font-bold text-slate-500 text-2xl md:text-4xl uppercase">
        Loading...
      </h1>
    )
  }
  if(isError){
    return (
      <h1 className="my-5 md:my-8 text-center font-bold text-red-600 text-2xl md:text-4xl uppercase">
        Something Went Wrong
      </h1>
    )
  }

  if (!allTodos || allTodos.length === 0) {
    return (
      <h1 className="my-5 md:my-8 text-center font-bold text-slate-500 text-2xl md:text-4xl uppercase">
        No Todos Here
      </h1>
    );
  } else {
    return (
      <ul className="my-2 shadow-lg">
        {allTodos.map((todo) => (
          <Listgroupitem key={todo._id} todo={todo} />
        ))}
      </ul>
    );
  }
};

export default Listgroup;
