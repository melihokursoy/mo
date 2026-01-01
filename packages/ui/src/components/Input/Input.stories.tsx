import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, fn } from 'storybook/test';
import { within } from '@testing-library/dom';
import { Input, type InputProps } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  args: { onChange: fn() },
  argTypes: {
    type: { control: 'select', options: ['text', 'email', 'password', 'number'] },
  },
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: { placeholder: 'Enter text...' },
  play: async ({ canvas, args }: { canvas: ReturnType<typeof within>; args?: Partial<InputProps> }) => {
    const input = canvas.getByPlaceholderText('Enter text...');
    await expect(input).toBeInTheDocument();
    await userEvent.type(input, 'Hello World');
    await expect(input).toHaveValue('Hello World');
    if (args?.onChange && typeof args.onChange === 'function') {
      await expect(args.onChange as (...args: unknown[]) => unknown).toHaveBeenCalled();
    }
  },
};

export const WithLabel: Story = {
  args: { label: 'Email', placeholder: 'you@example.com', type: 'email' },
  play: async ({ canvas }: { canvas: ReturnType<typeof within> }) => {
    const input = canvas.getByLabelText('Email');
    await expect(input).toBeInTheDocument();
    await expect(input).toHaveAttribute('type', 'email');
    await userEvent.type(input, 'test@example.com');
    await expect(input).toHaveValue('test@example.com');
  },
};

export const WithHelperText: Story = {
  args: { label: 'Password', type: 'password', helperText: 'Must be at least 8 characters' },
};

export const WithError: Story = {
  args: { label: 'Email', type: 'email', error: 'Please enter a valid email', defaultValue: 'invalid' },
  play: async ({ canvas }: { canvas: ReturnType<typeof within> }) => {
    const errorMessage = canvas.getByText('Please enter a valid email');
    await expect(errorMessage).toBeInTheDocument();
    const input = canvas.getByLabelText('Email');
    await expect(input).toHaveValue('invalid');
  },
};

export const Disabled: Story = {
  args: { label: 'Disabled', disabled: true, placeholder: 'Cannot edit' },
  play: async ({ canvas }: { canvas: ReturnType<typeof within> }) => {
    const input = canvas.getByLabelText('Disabled');
    await expect(input).toBeDisabled();
  },
};
