import type { Meta, StoryObj } from '@storybook/react';
import { expect } from 'storybook/test';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'success', 'warning', 'error', 'info'] },
    size: { control: 'select', options: ['sm', 'md'] },
  },
};
export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: { children: 'Default', variant: 'default' },
  play: async ({ canvas }) => {
    const badge = canvas.getByText('Default');
    await expect(badge).toBeInTheDocument();
  },
};

export const Success: Story = {
  args: { children: 'Success', variant: 'success' },
  play: async ({ canvas }) => {
    const badge = canvas.getByText('Success');
    await expect(badge).toBeInTheDocument();
    await expect(badge).toHaveClass('bg-green-100');
  },
};

export const Warning: Story = {
  args: { children: 'Warning', variant: 'warning' },
};

export const Error: Story = {
  args: { children: 'Error', variant: 'error' },
  play: async ({ canvas }) => {
    const badge = canvas.getByText('Error');
    await expect(badge).toBeInTheDocument();
    await expect(badge).toHaveClass('bg-red-100');
  },
};

export const Info: Story = {
  args: { children: 'Info', variant: 'info' },
};
