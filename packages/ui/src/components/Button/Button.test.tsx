import { render, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders with children', () => {
    const { getByText } = render(<Button>Test</Button>);
    expect(getByText('Test')).toBeInTheDocument();
  });

  it('applies all variants and sizes', () => {
    const variants = ['primary', 'secondary', 'outline', 'ghost'];
    const sizes = ['sm', 'md', 'lg'];
    variants.forEach(variant => {
      sizes.forEach(size => {
        const { getByRole, unmount } = render(
          <Button variant={variant} size={size}>Test</Button>
        );
        const button = getByRole('button');
        expect(button.className).toMatch(new RegExp(variant));
        expect(button.className).toMatch(new RegExp(size));
        unmount();
      });
    });
  });

  it('shows loading spinner when isLoading', () => {
    const { container } = render(<Button isLoading>Test</Button>);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('is disabled when disabled or isLoading', () => {
    const { getByRole, rerender } = render(<Button disabled>Test</Button>);
    expect(getByRole('button')).toBeDisabled();
    rerender(<Button isLoading>Test</Button>);
    expect(getByRole('button')).toBeDisabled();
  });

  it('applies custom className', () => {
    const { getByRole } = render(<Button className="custom">Test</Button>);
    expect(getByRole('button').className).toMatch(/custom/);
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    const { getByRole } = render(<Button onClick={handleClick}>Test</Button>);
    fireEvent.click(getByRole('button'));
    expect(handleClick).toHaveBeenCalled();
  });
});
