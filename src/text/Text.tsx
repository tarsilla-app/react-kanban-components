import { Input, InputProps } from '@tarsilla/react-components/input';
import { Label } from '@tarsilla/react-components/label';

import { KanbanComponent, KanbanComponentProps } from '@types';

type TextProps = KanbanComponentProps<string, InputProps>;

const Text: KanbanComponent<string, InputProps> = {
  id: 'text',
  render: ({ editable, onChange, ...rest }) => {
    if (editable) {
      return <Input onChange={({ target: { value } }) => onChange?.(value)} {...rest} />;
    }
    return <Label {...rest} />;
  },
};

export { Text, type TextProps };
