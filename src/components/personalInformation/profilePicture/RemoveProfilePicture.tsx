import React, { useCallback } from 'react';

/*Styled compoenets*/
import { RemoveProfilePictureButton } from './RemoveProfilePicture.styled';

/*Hooks*/
import { useAppDispatch } from 'store/store';

/*State managment*/
import { removeUserProfilePicture } from 'store/account.actions';

/*Constants*/
import { textKeys } from 'utils/textKeys';
import { IDsForTesting } from 'utils/idsForTesting';

export interface RemoveProfilePictureProps {
  userProfilePictureId: string | null;
}

export const RemoveProfilePicture = ({ userProfilePictureId }: RemoveProfilePictureProps) => {
  const dispatch = useAppDispatch();

  const handleRemoveProfilePicture = useCallback(() => {
    dispatch(removeUserProfilePicture());
  }, []);

  return (
    <RemoveProfilePictureButton
      id={IDsForTesting.remove_profile_picture_button_id}
      onClick={handleRemoveProfilePicture}
      visible={userProfilePictureId ? 'visible' : 'hidden'}
      color='danger'
      size='m'
    >
      {textKeys.button_remove}
    </RemoveProfilePictureButton>
  );
};
