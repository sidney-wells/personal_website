import { useRouter } from 'next/router';
import { render } from '../../test-utils';
import About from '../../src/pages/about';

jest.mock('next/router');

describe('About', () => {
  let pathname;

  it('should render the about page', () => {
    pathname = '/about';
    useRouter.mockImplementation(() => ({
      pathname
    }));

    render(<About />);
  });
});
