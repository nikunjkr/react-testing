import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Button from '../Button';

// The button node can be extracted via its text content with screen.getByText()
test('Extract button node with getByText', () => {
  render(<Button text={"submit"}/>);
  const button = screen.getByText('submit'); 

  expect(button).toBeInTheDocument();
});

// The same button node can also be extracted with screen.getByRole()
test('Extract button node with getByRole', () => {
  render(<Button text={'Login'}/>);
  const button = screen.getByRole('button');

  expect(button).toBeInTheDocument();
});
