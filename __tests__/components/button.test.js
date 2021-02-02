import { Button } from '../../src/components';
import { render } from '../../test-utils';

describe('Button', () => {
  it('should render a primary button', () => {
    render(<Button type="primary" />);
  });
  it('should render a secondary button', () => {
    render(<Button type="secondary" />);
  });
});
