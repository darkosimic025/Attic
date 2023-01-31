import React, { useEffect, useState } from 'react';

/*Components*/
import { DropdownMenu } from './DropdownMenu';

/*Hooks*/
import useComponentVisible from 'hooks/useComponentVisible';
import { useSelector } from 'react-redux';

/*Styled components*/
import {
  HeaderAppName,
  HeaderWrapper,
  LogoIcon,
  LogoTitleWrapper,
  ProfilePicture,
  ProfileWrapper,
} from './Header.styled';

/*Constants*/
import { textKeys } from 'utils/textKeys';
import { defaultAvatar } from 'utils/images';
import { IDsForTesting } from 'utils/idsForTesting';

/*Types*/
import { RootState } from 'store/store';

/*State management*/
import { accountServices } from 'services/accountServices';

/*Helpers*/
import { base64Reader } from 'utils/helpers';
import { Notifications } from './Notifications';

export const Header = () => {
  const { component, triggerComponent, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const userProfilePictureId = useSelector<RootState, string | null>(
    (state) => state.user.pictureId
  );

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

  return (
    <>
      <HeaderWrapper>
        <LogoTitleWrapper>
          <LogoIcon src='attic_header_logo.png' />
          <HeaderAppName>{textKeys.app_title}</HeaderAppName>
        </LogoTitleWrapper>
        <ProfileWrapper>
          <Notifications />
          <ProfilePicture
            src={picture as string}
            id={IDsForTesting.header_clickable_profile_picture_id}
            ref={triggerComponent}
            onClick={() => setIsComponentVisible(!isComponentVisible)}
          ></ProfilePicture>
          {isComponentVisible && (
            <DropdownMenu closeDropdown={setIsComponentVisible} ref={component} />
          )}
        </ProfileWrapper>
      </HeaderWrapper>
    </>
  );
};
