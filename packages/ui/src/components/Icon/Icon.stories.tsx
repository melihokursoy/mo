import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';
import { Heart, Bell, Check } from 'phosphor-react';
import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  render: (args) => <Icon {...args} icon={Heart} />,
  args: { size: 24, weight: 'regular', color: '#ef4444' },
  play: async ({ canvas }) => {
    const el = document.body.querySelector('svg');
    await expect(el).toBeInTheDocument();
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Icon icon={Heart} size={20} weight="thin" color="#ef4444" />
      <Icon icon={Bell} size={24} weight="regular" color="#0ea5e9" />
      <Icon icon={Check} size={28} weight="bold" color="#10b981" />
    </div>
  ),
};
