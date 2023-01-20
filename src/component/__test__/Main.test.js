
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Main from '../Main';


// The button node can be extracted via its text content with screen.getByText()
test('should not display login button', () => {
  render(<Main isLoggedIn={true}/>);
  const button = screen.queryByRole('button', {name: "login"}); 

  // expect(button).toBe() ;

})
