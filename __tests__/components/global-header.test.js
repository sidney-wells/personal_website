import { useRouter } from 'next/router';
import { render, screen, userEvent } from '../../test-utils';
import { GlobalHeader } from '../../src/components';

jest.mock('next/router');

describe('Global Header', () => {
  let pathname;

  it('should render a global header from homepage and click each header link', () => {
    pathname = '/';
    useRouter.mockImplementation(() => ({
      push: jest.fn(),
      pathname
    }));
    render(<GlobalHeader />);
    // userEvent.click(screen.getByTestId('home'));
    // userEvent.click(screen.getByTestId('about'));
    // userEvent.click(screen.getByTestId('projects'));
    userEvent.click(screen.getByTestId('resume'));
    userEvent.click(screen.getByTestId('contact'));
  });

  // it('should render a global header from resume page', () => {
  //   pathname = '/resume';
  //   useRouter.mockImplementation(() => ({
  //     pathname
  //   }));
  //   render(<GlobalHeader />);
  // });

  // it('should render a global header from contact page', () => {
  //   pathname = '/contact';
  //   useRouter.mockImplementation(() => ({
  //     pathname
  //   }));
  //   render(<GlobalHeader />);
  // });
});
