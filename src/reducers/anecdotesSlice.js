import { createSlice } from "@reduxjs/toolkit";
import { create, getAll, update } from "../services/anecdotes";

const sortAnecdotes = (anecdotes) => {
  return anecdotes.sort((a, b) => b.votes - a.votes);
}

const anecdotesSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    updateAnecdotes: (state, action) => {
      const newState = state.map(item => {
        return item.id === action.payload.id ? action.payload : item;
      })
      return sortAnecdotes(newState);
    },
    addAnecdote: (state, action) => {
      return sortAnecdotes(state.concat(action.payload));
    },
    setAnecdotes: (state, action) => {
      return sortAnecdotes(action.payload);
    }
  }
});

export const { updateAnecdotes, addAnecdote, setAnecdotes } = anecdotesSlice.actions;

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await getAll();
    dispatch(setAnecdotes(anecdotes));
  }
}

export const voteAnecdote = (id, updatedAnecdote) => {
  return async (dispatch) => {
    const response = await update(id, updatedAnecdote);
    dispatch(updateAnecdotes(response))
  }
}

export const createAnecdote = (newAnecdote) => {
  return async (dispatch) => {
    const response = await create(newAnecdote);
    dispatch(addAnecdote(response));
  }
}

export default anecdotesSlice.reducer;