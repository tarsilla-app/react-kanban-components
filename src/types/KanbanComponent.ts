import { UnknownObject } from './UnknownObject.js';

type KanbanComponentProps<ComponentValue, ComponentProps> = {
  id: string;
  value?: ComponentValue;
  editable?: boolean;
  onChange?: (value?: ComponentValue) => void;
} & Omit<Omit<ComponentProps, 'onChange'>, 'value'>;

type KanbanComponent<ComponentValue, ComponentProps extends UnknownObject | undefined | null = undefined> = {
  id: string;
  render: (props: KanbanComponentProps<ComponentValue, ComponentProps>) => JSX.Element;
};

export { type KanbanComponent, type KanbanComponentProps };
