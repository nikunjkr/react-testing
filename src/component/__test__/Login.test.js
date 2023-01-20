import React from 'react'
import {getByText, render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import Login from '../login'

test('calls onSubmit with the username and password when submitted', () => {
  // Arrange  Act Assert
  const testUser = {
    username: "Nikunj",
    password: "testPassword"
  }
  const handleSubmit = jest.fn();//mock function

  render(<Login onSubmit={handleSubmit} />)
  // ACt
  const usernameNode = screen.getByLabelText(/username/i)
  const passwordNode = screen.getByLabelText(/password/i)

  // const submitButtonNode = screen.getByText(/submit/i);

  const submitButtonNode = screen.getByRole("button", {name: "Login"})

  userEvent.type(usernameNode, testUser.username);
  userEvent.type(passwordNode, testUser.password);
 
  submitButtonNode.click();

  // Assert
  expect(handleSubmit).toHaveBeenCalledTimes(1);
  expect(handleSubmit).toHaveBeenCalledWith(testUser)
  expect(submitButtonNode.type).toBe('submit');
  
})
