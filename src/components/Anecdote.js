import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Anecdote = () => {
  const params = useParams();
  const anecdote = useSelector((state) => {
    return state.anecdotes.find((a) => a.id === params.id);
  });
  console.log(params);

  if (!anecdote) {
    return;
  }

  return (
    <div>
      <h2>
        {anecdote.content} by{" "}
        {anecdote.author ? anecdote.author : "Anonymous"}
      </h2>
      <div>has {anecdote.votes} votes</div>
      <div>for more info see</div>
    </div>
  );
};

export default Anecdote;
