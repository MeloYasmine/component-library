import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';
// Avaliar o que está sendo retornado na chamada do teste screen.
describe('<Button/>', () => {
  it('should has an element children', () => {
    render(
        <Button color='primary'>
          <span>BUTTON</span>
        </Button>
    );
    const buttonElementChildren = screen.getByText('BUTTON');
    expect(buttonElementChildren).toHaveTextContent('BUTTON');
  });

  it('should call onClick function when the button is clicked', () => {
    const onClick = jest.fn();
    render(
        <Button onClick={onClick} color='primary'>
          UPDATE
        </Button>
    );

    const clickAtButton = screen.getByRole('button');
    userEvent.click(clickAtButton);
    expect(onClick).toBeCalledTimes(1);
  });
});
