import React from 'react';
import { render, screen } from '@testing-library/react';
import Controls from '../../componetns/Controls';

describe('Controls', () => {
  it('Renders Controls component', () => {
    render(<Controls />);

    expect(screen.getByText('Submit')).toBeInTheDocument();
    expect(screen.getByText('Reset')).toBeInTheDocument();
    expect(screen.getByLabelText('Year')).toBeInTheDocument();
    expect(screen.getByLabelText('Species')).toBeInTheDocument();
  });
});
