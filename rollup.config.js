import { rollupReactConfig } from '@tarsilla/rollup-config/react';

export default [
  ...rollupReactConfig({
    paths: {
      '@types': ['./src/types/index.ts'],
    },
    external: ['@tarsilla/react-components/input', '@tarsilla/react-components/label'],
  }),
  ...rollupReactConfig({
    folder: 'text',
    paths: {
      '@types': ['./src/types/index.ts'],
    },
    external: ['@tarsilla/react-components/input', '@tarsilla/react-components/label'],
  }),
];
