import { createContext } from 'react';

interface RuntimeContext {
  isLoading: boolean;
  fetchHandler: (_isLoading: boolean) => void;
}

const RuntimeContext = createContext<RuntimeContext>({
  isLoading: false,
  fetchHandler: () => {
    null;
  },
});

export default RuntimeContext;
