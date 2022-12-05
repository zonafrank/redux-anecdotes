import axios from "axios";
const baseUrl = "http://localhost:3001/anecdotes";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const create = async (anecdoteObject) => {
  const response = await axios.post(baseUrl, anecdoteObject);
  return response.data;
}

const update = async (id, anecdoteObject) => {
  const updateObj = {
    content: anecdoteObject.content,
    votes: anecdoteObject.votes
  }
  const response = await axios.put(`${baseUrl}/${id}`, updateObj);
  return response.data;
}

export { getAll, create, update };
