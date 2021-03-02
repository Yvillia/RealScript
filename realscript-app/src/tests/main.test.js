import { render, screen } from '@testing-library/react';
import { Route } from 'react-router';
import Routes from '../routes';
import Socket from '../modules/socketClient';

test('renders learn react link', () => {
  render(<Routes />);
  render(<Socket />);
});
