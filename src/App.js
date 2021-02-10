import React from 'react';
import Navbar from './components/Navbar';
import BookContextProvider from './contexts/BookContext';
import BookList from './components/BookList';
import NewBookForm from './components/NewBookForm';


const submit = (title, author) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(title, author);
    }, 500);
  });
};

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <NewBookForm submit={submit}/>
      </BookContextProvider>
    </div>
  );
}

export default App;
