import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Label } from './Label';
import theme from '../GlobalStyles/theme';

describe('<Label />', () => {
  it('should render with the correct text content', () => {
    
    render(<Label color="primary">Label Text</Label>);
    
    const labelElement = screen.getByText('Label Text');
    
    expect(labelElement).toBeInTheDocument();
  });
  it('should render with the correct label color', () => {
    
    render(<Label color="primary">Label Text</Label>);

    const labelElement = screen.getByText('Label Text');
   
    expect(labelElement).toHaveStyle({ color: '#000000' }); 
  });
});
