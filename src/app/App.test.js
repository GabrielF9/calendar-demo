import { Home } from '@material-ui/icons';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Create Reminder', () => {
  render(<Home />);
  const linkElement = screen.getByTitle('2021');
  expect(linkElement).toBeInTheDocument();
});