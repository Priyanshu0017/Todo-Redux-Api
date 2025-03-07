import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteTodo, fetchTodos, saveTodo, updateTodo } from "./todoService";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    allTodos: [],
    edit: { todo: {}, isEdit: false },

    isLoading: false,
    isSuccess: false,
    isError: false,
  },
  reducers: {
    remove: (state, action) => {
      return {
        ...state,
        allTodos: state.allTodos.filter((todo) => todo._id !== action.payload),
      };
    },

    edit: (state, action) => {
      return { ...state, edit: { todo: action.payload, isEdit: true } };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTodos.pending, (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    });
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.allTodos = action.payload;
    });
    builder.addCase(getTodos.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    });

    builder.addCase(addTodo.pending, (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    });
    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.allTodos.push(action.payload); // Add the new todo to the existing array
    });
    builder.addCase(addTodo.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    });
    builder.addCase(removeTodo.pending, (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    });
    builder.addCase(removeTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
    });
    builder.addCase(removeTodo.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    });
    builder.addCase(update.pending, (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    });
    builder.addCase(update.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.allTodos = state.allTodos.map((todo) =>
        todo._id === action.payload._id ? action.payload : todo
      );
      state.edit = { todo: {}, isEdit: false };
    });
    builder.addCase(update.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    });
  },
});

export const { remove, edit } = todoSlice.actions;
export default todoSlice.reducer;

// Get todos
export const getTodos = createAsyncThunk("FETCH/TODOS", async () => {
  try {
    return await fetchTodos();
  } catch (error) {
    console.error(error);
  }
});

// ADD todos
export const addTodo = createAsyncThunk("ADD/TODOS", async (formData) => {
  try {
    return await saveTodo(formData);
  } catch (error) {
    console.error(error);
  }
});

// Remove todos
export const removeTodo = createAsyncThunk("REMOVE/TODOS", async (_id) => {
  try {
    return await deleteTodo(_id);
  } catch (error) {
    console.error(error);
  }
});

// Update todos
export const update = createAsyncThunk("UPDATE/TODOS", async (formData) => {
  try {
    return await updateTodo(formData);
  } catch (error) {
    console.error(error);
  }
});