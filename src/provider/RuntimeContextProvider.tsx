import { useState } from 'react';
import RuntimeContext from '@/context/RuntimeContext';

interface RuntimeContextProviderProps {
  children: React.ReactNode;
}

const RuntimeContextProvider = ({ children }: RuntimeContextProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const fetchHandler = (_isLoading: boolean) => {
    setIsLoading(_isLoading);
  };

  return (
    <RuntimeContext.Provider value={{ isLoading, fetchHandler }}>
      {children}
    </RuntimeContext.Provider>
  );
};

export default RuntimeContextProvider;
