import { Meta, StoryObj } from "@storybook/react";
import { ButtonProp, Button } from "../../components/Button";

const buttonObj: ButtonProp = {
    class: 'primary',
    label: "Submit"
};

const meta = {
    component: Button,
    title: 'Button',
    tags: ['autodocs'],
    args: buttonObj
} satisfies Meta<typeof Button>

export default meta;

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        ...buttonObj
    }
};

export const Success: Story = {
    args: {
        ...buttonObj,
        class: 'success'
    }
};

export const Danger: Story = {
    args: {
        ...buttonObj,
        class: 'danger'
    }
};