import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from './TodoList'

function addTodo(todoList, text = 'test text') {

  const todoInput = todoList.getByLabelText('Todo Text')
  const btn = todoList.queryByText('Add Todo')

  fireEvent.change(todoInput, { target: { value: text } })
  fireEvent.click(btn)
}

it("renders without crashing", function () {
  render(<TodoList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it('should add a todo', function () {
  const todoList = render(<TodoList />)

  // haven't added yet
  expect(todoList.queryByText('Delete Todo')).not.toBeInTheDocument();

  addTodo(todoList);

  const removeButton = todoList.getByText('Delete Todo')
  expect(removeButton).toBeInTheDocument();
  expect(removeButton.previousSibling.previousSibling).toHaveTextContent('test text')

  // form should be empty
  expect(todoList.getAllByDisplayValue("")).toHaveLength(1);
})

it('should remove a todo', function () {
  const todoList = render(<TodoList />)

  expect(todoList.queryByText('Delete Todo')).not.toBeInTheDocument();
  addTodo(todoList);

  const removeButton = todoList.getByText('Delete Todo')
  expect(removeButton).toBeInTheDocument();
  fireEvent.click(removeButton)
  expect(removeButton).not.toBeInTheDocument();
})