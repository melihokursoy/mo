import type { Meta, StoryObj } from '@storybook/react-vite';
import { Countdown } from './Countdown';

const meta: Meta<typeof Countdown> = {
  title: 'Components/Countdown',
  component: Countdown,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Countdown>;

const oneMinuteFromNow = new Date(Date.now() + 60_000).toISOString();
const oneMinuteAgo = new Date(Date.now() - 60_000).toISOString();

export const Default: Story = {
  args: { deadline: oneMinuteFromNow },
};

export const Expired: Story = {
  args: { deadline: oneMinuteAgo },
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-3">
      <Countdown deadline={oneMinuteFromNow} variant="primary" />
      <Countdown deadline={oneMinuteFromNow} variant="secondary" />
      <Countdown deadline={oneMinuteFromNow} variant="outline" />
      <Countdown deadline={oneMinuteFromNow} variant="ghost" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-3 items-center">
      <Countdown deadline={oneMinuteFromNow} size="sm" />
      <Countdown deadline={oneMinuteFromNow} size="md" />
      <Countdown deadline={oneMinuteFromNow} size="lg" />
    </div>
  ),
};
