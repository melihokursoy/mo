import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, fn } from 'storybook/test';
import { within } from '@testing-library/dom';
import { Button, type ButtonProps } from './Button';
import { Heart } from '@codecrib/ui/icons';

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
  play: async ({ canvas, args }: { canvas: ReturnType<typeof within>; args?: Partial<ButtonProps> }) => {
    const button = canvas.getByRole('button', { name: 'Primary Button' });
    await expect(button).toBeInTheDocument();
    await userEvent.click(button);
    if (args?.onClick && typeof args.onClick === 'function') {
      await expect(args.onClick as (...args: unknown[]) => unknown).toHaveBeenCalled();
    }
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

export const WithIcon: Story = {
  args: { children: 'With Icon', variant: 'primary', icon: <Heart size={16} />, iconPosition: 'left' },
  play: async ({ canvas }) => {
    const btn = canvas.getByRole('button', { name: 'With Icon' });
    await expect(btn).toBeInTheDocument();
  },
};
