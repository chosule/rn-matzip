import CustomButton from './CustomButton';
import type {Meta, StoryObj} from '@storybook/react';

const meta = {
  title: 'CustomButton',
  component: CustomButton,
  argTypes: {},
  args: {
    label: 'buttons',
    variant: 'filled',
  },
} satisfies Meta<typeof CustomButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FilledButton: Story = {
  args: {
    label: 'filledButton',
    variant: 'filled',
  },
};

export const outlineButton: Story = {
  args: {
    label: 'outlineButton',
    variant: 'outlined',
  },
};
