import { defineConfig } from '@wagmi/cli';
import { foundry, react } from '@wagmi/cli/plugins';

export default defineConfig({
  out: '../poap/lib/wagmi.hooks.ts',
  plugins: [
    foundry({
      project: '.',
      include: ['FeedbackFactory.sol/**', 'Feedback.sol/**'],
      forge: {
        build: true,
      },
    }),
    react({
      useContractEvent: false,
      useContract: false,
      useContractItemEvent: false,
    }),
  ],
});
