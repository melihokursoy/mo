import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, fn } from 'storybook/test';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: { onClick: fn() },
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'outline', 'ghost'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { children: 'Primary Button', variant: 'primary' },
  play: async ({ canvas, args }) => {
    const button = canvas.getByRole('button', { name: 'Primary Button' });
    await expect(button).toBeInTheDocument();
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalled();
  },
};

export const Secondary: Story = {
  args: { children: 'Secondary Button', variant: 'secondary' },
};

export const Outline: Story = {
  args: { children: 'Outline Button', variant: 'outline' },
};

export const Ghost: Story = {
  args: { children: 'Ghost Button', variant: 'ghost' },
};
