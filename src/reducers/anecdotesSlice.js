import { createSlice } from "@reduxjs/toolkit";

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

export const createVoteAction = (id) => {
  return { type: "VOTE", payload: { id } }
};

export const createAddAnecdoteAction = (anecdote) => {
  return {
    type: "ADD_NEW",
    payload: {
      text: anecdote
    }
  }
}

const sortAnecdotes = (anecdotes) => {
  return anecdotes.sort((a, b) => b.votes - a.votes);
}

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
};

const initialState = sortAnecdotes(anecdotesAtStart.map(asObject))


const anecdotesSlice = createSlice({
  name: "anecdotes",
  initialState,
  reducers: {
    voteAnecdote: (state, action) => {
      const id = action.payload;
      const newState = state.map(item => {
        return item.id === id ? { ...item, votes: item.votes + 1 } : item;
      })
      return sortAnecdotes(newState);
    },
    addAnecdote: (state, action) => {
      const newAnecdote = asObject(action.payload);
      return sortAnecdotes(state.concat(newAnecdote));
    }
  }
});

export const { voteAnecdote, addAnecdote } = anecdotesSlice.actions;
export default anecdotesSlice.reducer;