/// <reference types="vitest" />
import * as React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
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
    const variants = ['default', 'bordered', 'elevated'] as const;
    variants.forEach(variant => {
      const { container, unmount } = render(<Card variant={variant}>Test</Card>);
      const className = container.firstElementChild?.className ?? '';
      expect(className).toMatch(new RegExp(variant));
      unmount();
    });
  });

  it('applies custom className', () => {
    const { container } = render(<Card className="custom">Test</Card>);
    const className = container.firstElementChild?.className ?? '';
    expect(className).toMatch(/custom/);
  });

  it('renders children', () => {
    const { getByText } = render(<Card>Child</Card>);
    expect(getByText('Child')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Card ref={ref}>Test</Card>);
    expect(ref).toBeDefined();
  });
});
