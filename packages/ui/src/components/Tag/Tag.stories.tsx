import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from "react";
import { Tag } from "./Tag";

const meta: Meta<typeof Tag> = {
  component: Tag,
  args: { children: "Label" },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    variant: "default",
    size: "md",
  },
};

export const Removable: Story = {
  args: {
    variant: "info",
    size: "md",
    removable: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-2">
      <Tag size="sm">Small</Tag>
      <Tag size="md">Medium</Tag>
      <Tag size="lg">Large</Tag>
      <Tag size="md" removable>
        Removable
      </Tag>
    </div>
  ),
};
