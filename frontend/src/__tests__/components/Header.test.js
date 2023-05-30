import React from 'react';
import { render } from '@testing-library/react';
import Header from '../../componetns/Header';

describe('Header', () => {
  it('Renders Header component', () => {
    render(<Header />);
  });
});
