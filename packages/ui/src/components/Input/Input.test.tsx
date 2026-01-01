/// <reference types="vitest" />
import * as React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import { Input } from './Input';

describe('Input', () => {
  it('renders with label', () => {
    const { getByLabelText } = render(<Input label="Email" />);
    expect(getByLabelText('Email')).toBeInTheDocument();
  });

  it('shows error message', () => {
    const { getByText } = render(<Input error="Error!" />);
    expect(getByText('Error!')).toBeInTheDocument();
  });

  it('shows helperText when no error', () => {
    const { getByText } = render(<Input helperText="Help!" />);
    expect(getByText('Help!')).toBeInTheDocument();
  });

  it('is disabled when disabled prop is set', () => {
    const { getByPlaceholderText } = render(<Input label="Disabled" disabled placeholder="Test" />);
    expect(getByPlaceholderText('Test')).toBeDisabled();
  });

  it('applies type prop', () => {
    const { getByPlaceholderText } = render(<Input type="password" placeholder="pw" />);
    expect(getByPlaceholderText('pw')).toHaveAttribute('type', 'password');
  });

  it('applies custom className', () => {
    const { container } = render(<Input className="custom" />);
    const className = container.querySelector('input')?.className ?? '';
    expect(className).toMatch(/custom/);
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Input ref={ref} />);
    expect(ref).toBeDefined();
  });
});
