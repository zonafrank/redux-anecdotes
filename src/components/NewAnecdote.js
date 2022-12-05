import React from "react";
import { useDispatch } from "react-redux";
import { addAnecdote } from "../reducers/anecdotesSlice";
import {
  setNotification
} from "../reducers/notificationSlice";
import { create } from "../services/anecdotes";

const NewAnecdote = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const anecdote = e.target.anecdote.value;
    const response = await create({ content: anecdote, votes: 0 });
    dispatch(addAnecdote(response));
    const notificationObject = {
      type: "success",
      text: `Successfully added ${response.content}`
    }

    dispatch(setNotification(notificationObject))
    e.target.anecdote.value = "";
  };

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input name="anecdote" />
        </div>
        <button>create</button>
      </form>
    </div>
  );
};

export default NewAnecdote;
