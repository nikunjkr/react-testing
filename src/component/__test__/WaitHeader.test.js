
import React from 'react';
import '@testing-library/jest-dom';
import {screen, render, waitFor, queryByText} from '@testing-library/react'
import WaitHeader from '../WaitHeader';

test('remove header', async () => {
  render(<WaitHeader/>);
  await waitFor(() => {
    const header = screen.queryByText('Testing React Component!');
    expect(header).toBeNull();
  })
}) 