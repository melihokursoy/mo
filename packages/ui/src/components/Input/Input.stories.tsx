import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, fn } from 'storybook/test';
import { Input } from './Input';

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
  play: async ({ canvas, userEvent, args }) => {
    const input = canvas.getByPlaceholderText('Enter text...');
    await expect(input).toBeInTheDocument();
    await userEvent.type(input, 'Hello World');
    await expect(input).toHaveValue('Hello World');
    await expect(args.onChange).toHaveBeenCalled();
  },
};

export const WithLabel: Story = {
  args: { label: 'Email', placeholder: 'you@example.com', type: 'email' },
  play: async ({ canvas, userEvent }) => {
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
  play: async ({ canvas }) => {
    const errorMessage = canvas.getByText('Please enter a valid email');
    await expect(errorMessage).toBeInTheDocument();
    const input = canvas.getByLabelText('Email');
    await expect(input).toHaveValue('invalid');
  },
};

export const Disabled: Story = {
  args: { label: 'Disabled', disabled: true, placeholder: 'Cannot edit' },
  play: async ({ canvas }) => {
    const input = canvas.getByLabelText('Disabled');
    await expect(input).toBeDisabled();
  },
};
