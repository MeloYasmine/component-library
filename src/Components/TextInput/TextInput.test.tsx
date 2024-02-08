import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextInput } from './TextInput';

describe('<TextInput/>', () => {
  it('should render with the provided value', () => {
    const testValue = 'Test Value';
    render(<TextInput value={testValue} onChange={() => {}} />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue(testValue);
  });

  it('should call onChange function when the input value changes', () => {
    const onChange = jest.fn();
    const testValue = 'New Value';
    render(<TextInput value="" onChange={onChange} />);
    const inputElement = screen.getByRole('textbox');
    userEvent.type(inputElement, testValue);
    expect(onChange).toHaveBeenCalledTimes(testValue.length);
    expect(onChange).toHaveBeenCalledWith(testValue);
  });

  it('should be disabled when disabled prop is true', () => {
    render(<TextInput value="" onChange={() => {}} disabled />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeDisabled();
  });
});
