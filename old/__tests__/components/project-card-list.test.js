import { render } from '../../test-utils';
import { ProjectCardList } from '../../src/components';

describe('Project Card', () => {
  it('should render a project card', () => {
    render(<ProjectCardList start={2} span={5} />);
  });
});
