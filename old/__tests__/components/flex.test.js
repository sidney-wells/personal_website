import { render } from '../../test-utils';
import { Flex } from '../../src/components';

describe('Flex', () => {
  it('should render a flex', () => {
    render(<Flex start={2} span={5} />);
  });
});
