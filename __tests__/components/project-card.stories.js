import { render } from '../../test-utils';
import { ProjectCard } from '../../src/components';

describe('Project Card', () => {
  it('should render a project card', () => {
    render(<ProjectCard start={2} span={5} />);
  });
});
