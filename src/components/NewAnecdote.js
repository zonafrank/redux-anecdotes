import React from 'react'
import { useDispatch } from 'react-redux';
import { addAnecdote } from '../reducers/anecdotesSlice';
import { displayNotification, clearNotification } from '../reducers/notificationSlice';

const NewAnecdote = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const anecdote = e.target.anecdote.value;
    dispatch(addAnecdote(anecdote));
    dispatch(displayNotification({ type: "success", text: `Successfully added ${anecdote}` }))
    setTimeout(() => {
      dispatch(clearNotification());
    }, 4000);
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