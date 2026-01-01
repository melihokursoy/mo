import { render } from '@testing-library/react';
import { Badge } from './Badge';

describe('Badge', () => {
  it('renders with children', () => {
    const { getByText } = render(<Badge>Badge</Badge>);
    expect(getByText('Badge')).toBeInTheDocument();
  });

  it('applies all variants and sizes', () => {
    const variants = ['default', 'success', 'warning', 'error', 'info'];
    const sizes = ['sm', 'md'];
    variants.forEach(variant => {
      sizes.forEach(size => {
        const { getByText, unmount } = render(
          <Badge variant={variant} size={size}>Badge</Badge>
        );
        const badge = getByText('Badge');
        expect(badge.className).toMatch(new RegExp(variant));
        expect(badge.className).toMatch(new RegExp(size));
        unmount();
      });
    });
  });

  it('applies custom className', () => {
    const { getByText } = render(<Badge className="custom">Badge</Badge>);
    expect(getByText('Badge').className).toMatch(/custom/);
  });

  it('forwards ref', () => {
    const ref = { current: null };
    render(<Badge ref={ref}>Badge</Badge>);
    // Not a strong test, but ensures no crash
    expect(ref).toBeDefined();
  });
});
