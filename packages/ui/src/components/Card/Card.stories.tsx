import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { within } from '@testing-library/dom';
import { Card, CardHeader, CardTitle, CardContent } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'bordered', 'elevated'] },
  },
};
export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
      </CardHeader>
      <CardContent>This is the card content.</CardContent>
    </Card>
  ),
  args: { variant: 'default' },
  play: async ({ canvas }: { canvas: ReturnType<typeof within> }) => {
    await expect(canvas.getByText('Card Title')).toBeInTheDocument();
    await expect(canvas.getByText('This is the card content.')).toBeInTheDocument();
  },
};

export const Bordered: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Bordered Card</CardTitle>
      </CardHeader>
      <CardContent>Card with a border.</CardContent>
    </Card>
  ),
  args: { variant: 'bordered' },
};

export const Elevated: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Elevated Card</CardTitle>
      </CardHeader>
      <CardContent>Card with shadow.</CardContent>
    </Card>
  ),
  args: { variant: 'elevated' },
};
