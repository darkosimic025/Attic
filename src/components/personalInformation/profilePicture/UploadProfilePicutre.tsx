import React, { useCallback, useEffect, useRef, useState, ChangeEvent } from 'react';

/*Components*/
import { Error } from 'components/UI/error/Error';

/*Styled compoenets*/
import {
  ProfilePictureHeader,
  UploadProfilePictureIcon,
  UploadProfilePictureIconWrapper,
  UploadProfilePictureInputFile,
  UploadProfilePictureInputImage,
  UploadProfilePictureWithButtonWrapper,
  UploadProfilePictureWrapper,
} from './UploadProfilePicture.styled';

/*Hooks*/
import { useAppDispatch } from 'store/store';
import { useSelector } from 'react-redux';

/*Types*/
import { RootState } from 'store/store';

/*State managment*/
import { accountServices } from 'services/accountServices';
import { updateUserProfilePicture } from 'store/account.actions';

/*Constants*/
import { defaultAvatar } from 'utils/images';
import { textKeys } from 'utils/textKeys';

/*Helpers*/
import { base64Reader } from 'utils/helpers';
import { RemoveProfilePicture } from './RemoveProfilePicture';

/*Enums*/
import { ErrorFontWeight, ErrorSizes } from 'components/UI/error/enums';
import { IDsForTesting } from 'utils/idsForTesting';

export const UploadProfilePicutreSection = () => {
  const inputFile = useRef<HTMLInputElement>(null);

  const userProfilePictureId = useSelector<RootState, string | null>(
    (state) => state.user.pictureId
  );

  const [errorMessage, setErrorMessage] = useState<string>('');

  const [picture, setPicture] = useState<string | ArrayBuffer | null>();

  useEffect(() => {
    if (userProfilePictureId != null) {
      accountServices.getUserProfilePicture(userProfilePictureId).then((responseBuffer) => {
        base64Reader(responseBuffer, setPicture);
      });
    } else {
      setPicture(process.env.PUBLIC_URL + defaultAvatar);
    }
  }, [userProfilePictureId]);

  const dispatch = useAppDispatch();

  const handleInputFileClick = useCallback(() => {
    if (inputFile.current) {
      inputFile.current.click();
    }
  }, []);

  const onSubmit = useCallback((data: FileList) => {
    const formData = new FormData();
    formData.append('file', data[0]);
    dispatch(updateUserProfilePicture(formData))
      .unwrap()
      .then(() => setErrorMessage(''))
      .catch((e) => setErrorMessage(e.response.data.message));
  }, []);

  const handleUploadFile = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const eventTarget = e.target;
    onSubmit(eventTarget.files as FileList);
    eventTarget.value = '';
  }, []);

  return (
    <>
      <UploadProfilePictureWithButtonWrapper>
        <ProfilePictureHeader>{textKeys.profile_picture_label}</ProfilePictureHeader>
        <UploadProfilePictureWrapper>
          <UploadProfilePictureInputImage
            id={IDsForTesting.profile_picture_id}
            src={picture as string}
          />
          <UploadProfilePictureIconWrapper>
            <UploadProfilePictureIcon
              id={IDsForTesting.upload_profile_picture_button_id}
              onClick={handleInputFileClick}
            />
          </UploadProfilePictureIconWrapper>
          <UploadProfilePictureInputFile
            ref={inputFile}
            type='file'
            onChange={(e) => handleUploadFile(e)}
          />
        </UploadProfilePictureWrapper>
        <Error
          errorId={IDsForTesting.error_upload_profile_picture_id}
          size={ErrorSizes.Medium}
          fontWeight={ErrorFontWeight.Bold}
        >
          {errorMessage}
        </Error>
        <RemoveProfilePicture userProfilePictureId={userProfilePictureId} />
      </UploadProfilePictureWithButtonWrapper>
    </>
  );
};
