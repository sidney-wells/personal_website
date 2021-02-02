import { render } from '../../test-utils';
import Home from '../../src/pages/index';

describe('Home', () => {
  it('should render the home page', () => {
    render(<Home />);
  });
});
