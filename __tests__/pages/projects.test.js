import { render } from '../../test-utils';
import Project from '../../src/pages/projects';
import { useRouter } from 'next/router';
jest.mock('next/router');

describe('Project', () => {
  let pathname;

  it('should render the project page', () => {
    pathname = '/projects';
    useRouter.mockImplementation(() => ({
      pathname
    }));
    render(<Project />);
  });
});
