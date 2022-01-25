import { render } from '@testing-library/react';
import Video from './Video.component';

describe('Video Component', () => {
  test('Video player includes an aria-label', async () => {
    const { findByLabelText } = render(<Video />);
    expect(await findByLabelText('Video explanation')).toBeInTheDocument();
  });
});
