import { useState, useCallback } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { VerticalDivider } from '@/components/common/StyledDivider';
import FlexBox from '@/components/common/FlexBox';
import ColorPicker from '@/components/ColorPicker';
import StyledInput from '@/components/common/StyledInput';
import { ContainedButton } from '@/components/common/StyledButton';
import FileUpload from '@/components/FileUpload';
import { SetupProfileContainer } from './styles';

const trimColors = ['#F8EB54', '#5993D8', '#A5A5A5', '#E3E3E3'];

const bgColors = [
  '#FFB833',
  '#FFF25A',
  '#FFA2FF',
  '#4B6EFF',
  '#CB3BE5',
  '#FF3B3B',
  '#2F2F2F',
  '#3EC148',
];

const foilColors = ['#FFF25A', '#4B6EFF', '#FF3B3B', '#3EC148'];

const SetupProfile = () => {
  const [attachedFile, setAttachedFile] = useState<File | null>(null);

  const onSelectFile = useCallback((file?: File) => {
    if (!file) return;

    setAttachedFile(file);
  }, []);

  const handleReset = () => {
    setAttachedFile(null);
  };

  return (
    <SetupProfileContainer>
      <Typography
        variant='body2'
        fontWeight={700}
        textAlign='center'
        mt={3.5}
        mb={0.25}
      >
        Set up your profile and pass.
      </Typography>

      <Typography variant='custom9' mb={2.5}>
        This can all be edited later.
      </Typography>

      <FlexBox className='profile-wrapper'>
        <section className='setup-profile'>
          <Typography
            variant='caption'
            fontWeight={700}
            mb={2.25}
            component='div'
          >
            Customise your Sukuri Pass
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <ColorPicker title='Trim' colors={trimColors} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <ColorPicker title='Background' colors={bgColors} column={2} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <ColorPicker title='Foil' colors={foilColors} />
            </Grid>
          </Grid>

          <div className='sukuri-pass-preview'>
            <Typography variant='custom2' fontWeight={600} color='black.main'>
              Sukuri pass preview (WIP)
            </Typography>
          </div>
        </section>

        <VerticalDivider className='profile-divider' />

        <section className='setup-profile'>
          <Typography
            variant='caption'
            fontWeight={700}
            mb={2.25}
            component='div'
          >
            Display Name
          </Typography>

          <Grid container spacing={1}>
            <Grid item xs={12} sm={8} sx={{ position: 'relative' }}>
              <StyledInput />
              <Typography
                variant='custom2'
                sx={{ position: 'absolute', top: 16, right: 10 }}
              >
                spuro
              </Typography>
            </Grid>

            <Grid item xs={12} sm={4}>
              <ContainedButton sx={{ width: '100%' }}>
                Randomize
              </ContainedButton>
            </Grid>
          </Grid>

          <Typography variant='custom9' mt={0.5} mb={3.25} component='div'>
            Choose your display name, or randomize for pseudonymity.
          </Typography>

          <Typography
            variant='caption'
            fontWeight={700}
            mb={1.5}
            component='div'
          >
            Profile Picture
          </Typography>

          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <ContainedButton sx={{ width: '100%', mb: 1 }}>
                Upload
              </ContainedButton>

              <ContainedButton
                sx={{ width: '100%', mb: 1 }}
                onClick={handleReset}
              >
                Reset
              </ContainedButton>

              <Typography variant='custom9' component='div'>
                Set a custom profile picture, or use the one seeded from your
                address.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FileUpload
                attachedFile={attachedFile}
                onSelectFile={onSelectFile}
              />
            </Grid>
          </Grid>
        </section>
      </FlexBox>

      <ContainedButton sx={{ minWidth: 284, height: 54, my: 5 }}>
        Submit
      </ContainedButton>
    </SetupProfileContainer>
  );
};

export default SetupProfile;
