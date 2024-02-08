/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from '@testing-library/react';
import { Alert } from './Alert';

describe('Alert', () => {
  it('renders alert with provided children', () => {
    const { getByText } = render(
      <Alert color="success">
        This is a success alert.
      </Alert>
    );
    expect(getByText('This is a success alert.')).toBeInTheDocument();
  });

  it('renders alert with custom icon', () => {

    const CustomIcon = () => <svg data-testid="custom-icon" />;

    const { getByTestId } = render(
      <Alert color="success" icon={<CustomIcon data-testid="custom-icon" />}>
        Icon Test.
    </Alert>
    );
    expect(getByTestId('custom-icon')).toBeInTheDocument();
  });
});