import React from 'react'
import { useDispatch } from 'react-redux';
import { createAddAnecdoteAction } from '../reducers/anecdoteReducer';

const NewAnecdote = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const anecdote = e.target.anecdote.value;
    dispatch(createAddAnecdoteAction(anecdote));
    e.target.anecdote.value = "";
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={handleSubmit}>
        <div><input name="anecdote" /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default NewAnecdote