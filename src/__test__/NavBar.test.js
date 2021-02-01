import React from 'react'
import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils'
import Navbar from '../components/Navbar'
import renderer from 'react-test-renderer'
import { BookContext } from '../contexts/BookContext';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with text content",()=>{
  const books = []
  act(()=>{
    render(
      <BookContext.Provider value={{books}}>
        <Navbar />
      </BookContext.Provider>, 
      container);
    })
    let child = document.getElementById("h1")
    expect(child.textContent).toBe("Book List")
})

it("matches snapshot",()=>{
  const books = []
  const tree = renderer.create(
      <BookContext.Provider value={{books}}>
        <Navbar />
      </BookContext.Provider>
    ).toJSON()
    expect(tree).toMatchSnapshot() 
})