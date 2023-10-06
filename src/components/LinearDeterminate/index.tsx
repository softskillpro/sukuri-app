import { useState, useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { LinearDeterminateContainer } from './styles';

const LinearDeterminate = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <LinearDeterminateContainer>
      <LinearProgress
        variant='determinate'
        value={progress}
        sx={{ color: 'red' }}
      />
    </LinearDeterminateContainer>
  );
};

export default LinearDeterminate;
