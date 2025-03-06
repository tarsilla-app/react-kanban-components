/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Text } from '../src/text/index.js';

const TextStory = ({ value, ...rest }: any) => {
  const [_value, _setValue] = useState(value);

  return (
    <Text.render
      onChange={(value) => {
        _setValue(value);
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
