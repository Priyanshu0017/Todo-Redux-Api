import axios from "axios";

export const fetchTodos = async () => {
  const response = await axios.get("/api/todo");
  return response.data;
};

export const saveTodo = async (formData) => {
  const response = await axios.post("/api/todo", formData);
  return response.data;
};

export const deleteTodo = async (_id) => {
  const response = await axios.delete("/api/todo/" + _id);
  return response.data;
};

export const updateTodo = async (formdata) => {
  const response = await axios.put("/api/todo/" + formdata._id, formdata);
  return response.data;
};