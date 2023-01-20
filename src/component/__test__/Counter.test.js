/*  
 Test the props 
 Test the type to be number (not undefined)
*/
import { render, screen} from '@testing-library/react'
import user from "@testing-library/user-event"
import Counter from '../Counter';

describe('counter', ()=> {

  test.only('render counter', () => {
    // render th component
    render(<Counter/>)
    // target nodes
    const element = screen.getByText(0);
    // Assert
    expect(element).toBeInTheDocument();
  })

  test('renders correctly', ()=> {
    // first render 
    render(<Counter/>)
    const incrementButton = screen.getByRole('button',{
      name: "+",
    });
    // button is presnt in dom
    expect(incrementButton).toBeInTheDocument();
  }) 

  test('render a count of 1 after the increment button is clicked', async () => {
    // user.setup();
    render(<Counter/>)//

    const incrementButton = screen.getByRole("button", {
      name: "+"
    })

    user.click(incrementButton);

    // screen.debug();

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  })
  
  test.only('render a count of 1 after the increment button is click', async () => {
    // user.setup();
    render(<Counter/>)//

    const incrementButton = screen.getByRole("button", {
      name: "+"
    })

    user.click(incrementButton);

    const countElement = await  screen.findBy("heading");
    expect(countElement).not.toHaveTextContent("0");
  })

  test('render counter contains true values', () => {
    render(<Counter/>)
    const element = screen.getByText(0);
    // value is true
    expect(element).toBeTruthy();
  })

}) 
