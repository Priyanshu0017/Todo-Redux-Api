import axios from "axios";

export const fetchTodos = async () => {
  const response = await axios.get("/api/todo");
  return response.data;
};

export const saveTodo = async (formData) => {
  const responce = await axios.post("/api/todo", formData);
  return responce.data;
};

export const deleteTodo = async (_id) => {
  const responce = axios.delete("/api/todo/" + _id);
  return responce.data;
};

export const updateTodo = async (formdata) => {
  const responce = await axios.put("/api/todo/" + formdata._id, formdata);
  return responce.data;
};
