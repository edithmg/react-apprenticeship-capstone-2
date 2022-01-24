import { render, screen } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import SpaceData from './SpaceData.component';
import * as NASA from '../../mocks/photo-of-the-day.json';

const date = '2022-01-23';
const url = `${process.env.REACT_APP_NASA_URL}?api_key=${process.env.REACT_APP_NASA_APIKEY}${date}`;
//setting up msw
const handlers = [
  // fetching api mock
  rest.get(`${url}`, (req, res, ctx) => res(ctx.status(200), ctx.json(NASA))),
  rest.get(`${url}`, (req, res, ctx) => res(ctx.status(400), ctx.json(NASA))),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Space Data Component', () => {
  test('renders photo of the day data', () => {
    render(<SpaceData />);
    const element = screen.getByRole('heading');
    expect(element).toBeInTheDocument();
  });

  test('SpaceData is fetching data from api', async () => {
    const { findByText } = render(<SpaceData />);
    expect(
      await findByText('Saturn, Tethys, Rings, and Shadows')
    ).toBeInTheDocument();
  });
});
