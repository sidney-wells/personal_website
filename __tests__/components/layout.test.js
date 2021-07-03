import { Layout } from '../../src/components';
import { render } from '../../test-utils';
import { useRouter } from 'next/router';
jest.mock('next/router');

describe('Layout', () => {
  let pathname;

  it('should render a layout', () => {
    pathname = '/projects';
    useRouter.mockImplementation(() => ({
      pathname
    }));
    render(<Layout />);
  });
});
