import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button component', () => {
  it('should be clickable', () => {
    const onClick = jest.fn();
    render(<Button data-testid='button' onClick={onClick}></Button>);
    const buttonElm = screen.getByTestId('button');

    fireEvent.click(buttonElm);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
