import type { Meta, StoryObj } from '@storybook/react-vite';
import { Countdown } from './Countdown';

const meta: Meta<typeof Countdown> = {
  title: 'Components/Countdown',
  component: Countdown,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Countdown>;

const deadline = new Date(Date.now() + 6*60*60*1000).toISOString();
const expiredDeadline   = new Date(Date.now() - 60_000).toISOString();

export const Default: Story = {
  args: { deadline: deadline },
};

export const Expired: Story = {
  args: { deadline: expiredDeadline },
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-3">
      <Countdown deadline={deadline} variant="primary" />
      <Countdown deadline={deadline} variant="secondary" />
      <Countdown deadline={deadline} variant="outline" />
      <Countdown deadline={deadline} variant="ghost" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-3 items-center">
      <Countdown deadline={deadline} size="sm" />
      <Countdown deadline={deadline} size="md" />
      <Countdown deadline={deadline} size="lg" />
    </div>
  ),
};
