import { render } from '../../test-utils';
import { Box } from '../../src/components';

describe('Box', () => {
  it('should render a box', () => {
    render(<Box start={2} span={5} />);
  });
});
