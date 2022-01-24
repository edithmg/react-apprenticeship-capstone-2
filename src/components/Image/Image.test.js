import { render, screen } from '@testing-library/react';
import Image from './Image.component';

describe('Image Component', () => {
  test('renders image', () => {
    render(<Image />);
    const element = screen.getByRole('img');
    expect(element).toBeInTheDocument();
  });

  test('image includes an aria-label', async () => {
    const { findByLabelText } = render(<Image />);
    expect(await findByLabelText('Photo explanation')).toBeInTheDocument();
  });
});
