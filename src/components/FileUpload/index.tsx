import { useRef } from 'react';
import type { ChangeEvent } from 'react';
import Image from 'next/image';
import FlexBox from '@/components/common/FlexBox';
import LogoIcon from '@/components/svgs/LogoIcon';
import { FileUploadContainer } from './styles';

interface FileUploadProps {
  attachedFile: File | null;
  onSelectFile: (file?: File) => void;
}

const FileUpload = ({ attachedFile, onSelectFile }: FileUploadProps) => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const uploadHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    if (!files) return;

    if (files.length === 0) return;

    onSelectFile(files[0]);
  };

  const handleClick = () => {
    hiddenFileInput?.current?.click();
  };

  return (
    <FileUploadContainer>
      <input
        type='file'
        hidden
        ref={hiddenFileInput}
        accept='image/jpeg,image/png'
        onChange={uploadHandler}
      />

      {attachedFile ? (
        <Image
          src={URL.createObjectURL(attachedFile)}
          width={160}
          height={160}
          className='upload-img-preview'
          alt='Upload'
        />
      ) : (
        <FlexBox className='upload-img-thumbnail' onClick={handleClick}>
          <LogoIcon fill='#FFC0CB' sx={{ fontSize: 160 }} />
        </FlexBox>
      )}
    </FileUploadContainer>
  );
};

export default FileUpload;
