import { JSX, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Text, TextProps } from '../src/text/index.js';

const TextStory = ({ onChange, value, ...rest }: TextProps): JSX.Element => {
  const [_value, _setValue] = useState(value);

  return (
    <Text.render
      onChange={(value) => {
        _setValue(value);
        onChange?.(value);
        console.log(value);
      }}
      {...rest}
      value={_value}
    />
  );
};

const meta: Meta<typeof TextStory> = {
  title: 'Text',
  component: TextStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  decorators: [],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 'Tarsilla',
    editable: false,
    debounceWait: undefined,
  },
};

export const Editable: Story = {
  args: {
    value: 'Tarsilla',
    editable: true,
    debounceWait: undefined,
  },
};

export const Debounce: Story = {
  args: {
    value: 'Tarsilla',
    editable: true,
    debounceWait: 2000,
  },
};
