import React from 'react'
import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils'
import NewBookForm from '../NewBookForm'
import renderer from 'react-test-renderer'

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

// it("changes value when clicked", () => {
//   const submit = jest.fn();
//   act(() => {
//     render(<NewBookForm submit={submit} />, container);
//   });
// })