import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const NewBookForm = ({submit}) => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: 'ADD_BOOK', book:{title, author}});
    setTitle('');
    setAuthor('');
    submit();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input data-testid="title" type="text" placeholder="book title" value={title}
        onChange={(e) => setTitle(e.target.value)} />
      <input data-testid="author" type="text" placeholder="author name" value={author}
        onChange={(e) => setAuthor(e.target.value)} />
      <input data-testid="submit" type="submit" value="add book" />
    </form>
  );
}
 
export default NewBookForm;