import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { voteAnecdote } from "../reducers/anecdotesSlice";
import {
  setNotification
} from "../reducers/notificationSlice";
import Filter from "./Filter";

const AnecdoteList = () => {
  const filterValue = useSelector((state) => {
    return state.filter;
  });

  const anecdotes = useSelector((state) => {
    return state.anecdotes.filter((a) =>
      a.content.toLowerCase().includes(filterValue.toLowerCase())
    );
  });

  const dispatch = useDispatch();

  const vote = async (id) => {
    const anecdote = anecdotes.find((a) => a.id === id);
    const updatedAnecdote = { ...anecdote, votes: anecdote.votes + 1 };

    dispatch(voteAnecdote(id, updatedAnecdote));

    const notificationObject = {
      type: "success",
      text: `You voted ${anecdote.content}`
    }

    dispatch(setNotification(notificationObject))
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>
            <Link to={`/anecdotes/${anecdote.id}`}>{anecdote.content}</Link>
          </div>
          <div>
            has {anecdote.votes}{" "}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdoteList;
