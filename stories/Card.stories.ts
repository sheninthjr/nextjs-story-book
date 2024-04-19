import { Card } from "@/app/components/Card";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Card> = {
  component: Card,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const WhiteCard: Story = {
  args: {
    title: "Docker",
  },
};

export const smallRounded: Story = {
  args: {
    title: "Docker",
    rounded: "3xl",
  },
};
