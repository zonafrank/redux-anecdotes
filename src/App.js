import { useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import NewAnecdote from './components/NewAnecdote';
import AnecdoteList from './components/AnecdoteList';
import Notification from './components/Notification';
import { initializeAnecdotes } from './reducers/anecdotesSlice';
import { useDispatch } from 'react-redux';
import About from './components/About';
import Footer from './components/Footer';
import Anecdote from './components/Anecdote';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeAnecdotes());
  }, [dispatch]);

  return (
    <div>
      <h1>Software Anecdotes</h1>
      <Notification />
      <div>
        <Link to="/anecdotes">Anecdotes</Link>
        <Link to="/create">Create New</Link>
        <Link to="/about">About</Link>
      </div>
      <Routes>
        <Route path="/anecdotes" element={<AnecdoteList />} />
        <Route path="/anecdotes/:id" element={<Anecdote />} />
        <Route path="/create" element={<NewAnecdote />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<AnecdoteList />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App