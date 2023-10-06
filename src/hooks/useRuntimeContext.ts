import { useContext } from 'react';
import RuntimeContext from '@/context/RuntimeContext';

const useRuntimeContext = () => {
  const { isLoading, fetchHandler } = useContext(RuntimeContext);
  return { isLoading, fetchHandler };
};

export default useRuntimeContext;
