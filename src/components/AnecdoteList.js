import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { voteAnecdote } from '../reducers/anecdotesSlice';
import { displayNotification, clearNotification } from '../reducers/notificationSlice';

const AnecdoteList = () => {
  const filterValue = useSelector(state => {
    return state.filter;
  })

  const anecdotes = useSelector(state => {
    return state.anecdotes.filter(a => a.content.toLowerCase().includes(filterValue.toLowerCase()));
  });

  const dispatch = useDispatch();

  const vote = (id) => {
    const anecdote = anecdotes.find(a => a.id === id);
    dispatch(voteAnecdote(id));
    dispatch(displayNotification({ type: "success", text: `You voted ${anecdote.content}` }));
    setTimeout(() => {
      dispatch(clearNotification())
    }, 4000)
  }

  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}{" "}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList