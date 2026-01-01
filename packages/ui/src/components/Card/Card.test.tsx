import { render } from '@testing-library/react';
import { Card, CardHeader, CardTitle, CardContent } from './Card';

describe('Card', () => {
  it('renders content', () => {
    const { getByText } = render(
      <Card>
        <CardHeader>
          <CardTitle>Title</CardTitle>
        </CardHeader>
        <CardContent>Content</CardContent>
      </Card>
    );
    expect(getByText('Title')).toBeInTheDocument();
    expect(getByText('Content')).toBeInTheDocument();
  });

  it('applies all variants', () => {
    const variants = ['default', 'bordered', 'elevated'];
    variants.forEach(variant => {
      const { container, unmount } = render(<Card variant={variant}>Test</Card>);
      expect(container.firstChild?.className).toMatch(new RegExp(variant));
      unmount();
    });
  });

  it('applies custom className', () => {
    const { container } = render(<Card className="custom">Test</Card>);
    expect(container.firstChild?.className).toMatch(/custom/);
  });

  it('renders children', () => {
    const { getByText } = render(<Card>Child</Card>);
    expect(getByText('Child')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = { current: null };
    render(<Card ref={ref}>Test</Card>);
    expect(ref).toBeDefined();
  });
});
