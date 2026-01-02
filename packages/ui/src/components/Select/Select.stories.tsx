import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from "react";
import { within } from '@testing-library/dom';
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    onChange: { action: 'onChange' },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

const items = [
  { value: "apple", label: "Apple", icon: "https://twemoji.maxcdn.com/v/latest/72x72/1f34e.png" },
  { value: "banana", label: "Banana", icon: "https://twemoji.maxcdn.com/v/latest/72x72/1f34c.png" },
  { value: "pear", label: "Pear", icon: "https://twemoji.maxcdn.com/v/latest/72x72/1f350.png" },
  {
    label: "Citrus",
    items: [
      { value: "orange", label: "Orange", icon: "https://twemoji.maxcdn.com/v/latest/72x72/1f34a.png" },
      { value: "lemon", label: "Lemon", icon: "https://twemoji.maxcdn.com/v/latest/72x72/1f34b.png" },
      { value: "lime", label: "Lime", icon: "https://twemoji.maxcdn.com/v/latest/72x72/1f34d.png" },
    ],
  },
  {
    label: "Berries",
    items: [
      { value: "strawberry", label: "Strawberry", icon: "https://twemoji.maxcdn.com/v/latest/72x72/1f353.png" },
      { value: "grapes", label: "Grapes", icon: "https://twemoji.maxcdn.com/v/latest/72x72/1f347.png" },
      { value: "cherries", label: "Cherries", icon: "https://twemoji.maxcdn.com/v/latest/72x72/1f352.png" },
    ],
  },
  {
    label: "Exotic",
    items: [
      { value: "avocado", label: "Avocado", icon: "https://twemoji.maxcdn.com/v/latest/72x72/1f951.png" },
      { value: "kiwi", label: "Kiwi", icon: "https://twemoji.maxcdn.com/v/latest/72x72/1f95d.png" },
      { value: "mango", label: "Mango", icon: "https://twemoji.maxcdn.com/v/latest/72x72/1f96d.png" },
    ],
  },
];

export const Default: Story = {
  args: {
    items,
    placeholder: "Choose fruit",
  },
};

export const MultiSelect: Story = {
  args: {
    items,
    multiselect: true,
    placeholder: "Choose fruits",
  },
};

export const MultiSelectMultiline: Story = {
  args: {
    items,
    multiselect: true,
    multiline: true,
    placeholder: "Choose fruits",
  },
};

export const Interactive: Story = {
  args: {
    items,
    multiselect: true,
    placeholder: 'Choose fruits',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const byPlaceholder = canvas.queryByPlaceholderText?.('Choose fruits');
    const byRole = canvas.queryByRole?.('button') || canvas.queryByRole?.('combobox');
    const target = byPlaceholder || byRole;
    if (target) (target as HTMLElement).click();
  },
};
