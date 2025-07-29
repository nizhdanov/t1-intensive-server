import { eslint } from '@nizhdanov/eslint';

export default eslint(
  { typescript: true, stylistic: false },
  {
    rules: {
      'node/prefer-global/process': 'off'
    }
  }
);
