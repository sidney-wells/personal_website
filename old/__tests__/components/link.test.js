import { Link } from '../../src/components';
import { render } from '../../test-utils';

describe('Link', () => {
  it('should render a small link', () => {
    render(<Link size="s" />);
  });
  it('should render a medium link', () => {
    render(<Link size="m" />);
  });
  it('should render a large link', () => {
    render(<Link size="l" />);
  });
});
