/// <reference types="vitest" />
import { describe, it, expect, vi } from 'vitest';
import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './Button';
import { Heart } from '@codecrib/ui/icons';
import type { IconWeight } from '@codecrib/ui/icons';

describe('Button', () => {
  it('renders with children', () => {
    const { getByText } = render(<Button>Test</Button>);
    expect(getByText('Test')).toBeInTheDocument();
  });

  it('applies all variants and sizes', () => {
    const variants = ['primary', 'secondary', 'outline', 'ghost'] as const;
    const sizes = ['sm', 'md', 'lg'] as const;
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
    const handleClick = vi.fn();
    const { getByRole } = render(<Button onClick={handleClick}>Test</Button>);
    fireEvent.click(getByRole('button'));
    expect(handleClick).toHaveBeenCalled();
  });

  it('renders an icon on the left when provided', () => {
    const { getByRole, container } = render(
      <Button icon={<span data-testid="heart" />} iconPosition="left">Left</Button>
    );
    const btn = getByRole('button', { name: 'Left' });
    const icon = container.querySelector('[data-testid="heart"]');
    expect(icon).toBeInTheDocument();
    const first = btn.firstElementChild as HTMLElement | null;
    expect(first).toContainElement(icon as HTMLElement);
  });

  it('renders an icon on the right when requested', () => {
    const { getByRole, container } = render(
      <Button icon={<span data-testid="heart2" />} iconPosition="right">Right</Button>
    );
    const btn = getByRole('button', { name: 'Right' });
    const icon = container.querySelector('[data-testid="heart2"]');
    expect(icon).toBeInTheDocument();
    const last = btn.lastElementChild as HTMLElement | null;
    expect(last).toContainElement(icon as HTMLElement);
  });

  it('forwards size and weight to icon based on button size (uses real icon)', () => {
    const mapping: Record<string, string> = { sm: '16', md: '20', lg: '24' };
    const weightMap: Record<string, IconWeight> = { sm: 'thin', md: 'regular', lg: 'bold' };

    (Object.keys(mapping) as Array<keyof typeof mapping>).forEach((s) => {
      const { container, unmount } = render(
        <Button size={s as any} icon={<Heart data-testid={`heart-${s}`} />} />
      );
      const svg = container.querySelector(`[data-testid="heart-${s}"]`) as SVGElement | null;
      expect(svg).toBeInTheDocument();
      // size is set as numeric attribute (width/height)
      expect(svg?.getAttribute('width') || svg?.getAttribute('height')).toBe(mapping[s]);

      // Instead of relying on a helper attribute, verify the actual SVG markup
      // matches the markup produced by rendering the icon with the expected weight.
      const { container: refContainer, unmount: unmountRef } = render(
        <Heart weight={weightMap[s]} />
      );
      const refSvg = refContainer.querySelector('svg') as SVGElement | null;
      expect(refSvg).toBeInTheDocument();

      // Compare outerHTML to ensure the rendered SVG markup (paths/attributes) match
      expect(svg?.outerHTML).toBe(refSvg?.outerHTML);

      unmountRef();
      unmount();
    });
  });
});
