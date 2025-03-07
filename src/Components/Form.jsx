import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, update } from "../features/todos/todoSlice";

const Form = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { edit } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    !edit.isEdit
      ? dispatch(addTodo({ title, description }))
      : dispatch(update({ _id: edit.todo._id, title, description }));
    setTitle("");
    setDescription("");
  };

  useEffect(() => {
    setTitle(edit.todo.title);
    setDescription(edit.todo.description);
  }, [edit]);

  return (
    <div className="card ">
      <form onSubmit={(e) => handleSubmit(e)}>
        <textarea
          className="w-full p-3 outline-none border-solid border-2 border-zinc-400 my-2"
          type="text"
          placeholder="Enter Title"
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        ></textarea>

        <textarea
          className="w-full p-3 outline-none border-solid border-2 border-zinc-400 my-2"
          type="text"
          placeholder="Enter Description"
          required
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button className="w-full bg-green-600 p-1 text-white">
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default Form;
