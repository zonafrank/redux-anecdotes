import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useField } from "../hooks";
import { addAnecdote } from "../reducers/anecdotesSlice";
import { setNotification } from "../reducers/notificationSlice";
import { create } from "../services/anecdotes";

const NewAnecdote = () => {
  const content = useField("text");
  const author = useField("text");
  const url = useField("text");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!(content.value && content.author && content.url)) {
      return;
    }

    const anecdote = {
      content: content.value,
      author: author.value,
      url: url.value,
      votes: 0
    };

    const response = await create(anecdote);

    dispatch(addAnecdote(response));
    const notificationObject = {
      type: "success",
      text: `Successfully added ${response.content}`
    };

    dispatch(setNotification(notificationObject));
    content.reset();
    author.reset();
    url.reset();

    navigate("/");
  };

  const resetInputs = () => {
    content.reset();
    author.reset();
    url.reset();
  };

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="content">
          content:{" "}
          <input
            value={content.value}
            type={content.type}
            onChange={content.onChange}
            id="content"
            name="content"
          />
        </label>
        <br />
        <label htmlFor="author">
          author:{" "}
          <input
            value={author.value}
            type={author.type}
            onChange={author.onChange}
            id="author"
            name="author"
          />
        </label>
        <br />
        <label htmlFor="url">
          url:{" "}
          <input
            value={url.value}
            type={url.type}
            onChange={url.onChange}
            id="url"
            name="url"
          />
        </label>
        <br />
        <button type="submit">create</button>
        <button onClick={resetInputs} type="button">
          clear
        </button>
      </form>
    </div>
  );
};

export default NewAnecdote;
