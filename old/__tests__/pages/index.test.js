import { useRouter } from 'next/router';
import { render } from '../../test-utils';
import Home from '../../src/pages/index';

jest.mock('next/router');

describe('Home', () => {
  let pathname;

  it('should render the home page', () => {
    pathname = '/projects';
    useRouter.mockImplementation(() => ({
      pathname
    }));
    render(<Home />);
  });
});
