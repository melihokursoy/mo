/// <reference types="vitest" />
import { createRef } from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { Heart, type IconProps as PhosphorIconProps } from 'phosphor-react';
import { Icon } from './Icon';

describe('Icon', () => {
  it('renders the provided phosphor icon', () => {
    const { container } = render(<Icon icon={Heart} data-testid="icon" />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('applies className and size', () => {
    const { getByTestId } = render(<Icon icon={Heart} className="custom" data-testid="icon" size={32} />);
    const svg = getByTestId('icon');
    expect(svg).toHaveClass('custom');
    expect(svg.getAttribute('width') || svg.getAttribute('height')).toBeTruthy();
  });

  it('forwards ref to the underlying SVG element', () => {
    const ref = createRef<SVGSVGElement>();
    const { getByTestId } = render(<Icon icon={Heart} ref={ref} data-testid="icon-ref" />);
    const svg = getByTestId('icon-ref');
    expect(svg).toBeInTheDocument();
    expect(ref.current).toBeInstanceOf(SVGElement);
  });

  it('forwards color via `data-color` attribute', () => {
    const color = '#123456';
    const { getByTestId } = render(<Icon icon={Heart} color={color} data-testid="icon-color" />);
    const svg = getByTestId('icon-color');
    expect(svg.getAttribute('data-color')).toBe(color);
  });

  it('accepts string size values and different weights without throwing', () => {
    const sizes = ['1em', '24px', '2rem'];
    const weights: Array<PhosphorIconProps['weight']> = ['thin', 'regular', 'bold'];

    sizes.forEach((s) => {
      const { container } = render(<Icon icon={Heart} size={s as string} />);
      expect(container.querySelector('svg')).toBeInTheDocument();
    });

    weights.forEach((w) => {
      const { container } = render(<Icon icon={Heart} weight={w} />);
      expect(container.querySelector('svg')).toBeInTheDocument();
    });
  });
});
