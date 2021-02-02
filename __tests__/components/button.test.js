import { Button } from '../../src/components';
import { render, userEvent, screen } from '../../test-utils';

describe('Button', () => {
  it('should render a primary button', () => {
    const mockCallBack = jest.fn();

    render(
      <Button type="primary" onClick={mockCallBack} data-testid="button" />
    );

    userEvent.click(screen.getByTestId('button'));
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
  it('should render a secondary button', () => {
    render(<Button type="secondary" />);
  });
});
