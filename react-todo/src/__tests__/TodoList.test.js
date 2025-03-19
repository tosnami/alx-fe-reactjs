
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TodoList from "../components/TodoList"; // تحقق من أن المسار صحيح
import "@testing-library/jest-dom";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    
    expect(screen.getByText(/learn react/i)).toBeInTheDocument();
    expect(screen.getByText(/build a todo app/i)).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText(/add a new todo/i);
    const addButton = screen.getByRole("button", { name: /add/i });

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(addButton);

    expect(screen.getByText(/new todo/i)).toBeInTheDocument();
  });

  test("toggles a todo", () => {
    render(<TodoList />);
    
    const todoText = screen.getByText(/learn react/i);
    fireEvent.click(todoText);
    
    expect(todoText).toHaveStyle("text-decoration: line-through");
    
    fireEvent.click(todoText);
    expect(todoText).toHaveStyle("text-decoration: none");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    
    const deleteButtons = screen.getAllByRole("button", { name: /delete/i });
    fireEvent.click(deleteButtons[0]);

    expect(screen.queryByText(/learn react/i)).not.toBeInTheDocument();
  });
});