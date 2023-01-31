import React, { useEffect } from 'react';

/*Hooks*/
import { useNavigate } from 'react-router-dom';

/* Styled components */
import {
  SuccessfulRegistration,
  SuccessfulRegistrationText,
} from './successfullRegistration.styled';

/*Constants*/
import { paths } from 'paths/paths';
import { textKeys } from 'utils/textKeys';

export const SuccessfulRegistrationMessage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate(paths.SIGNIN), 2500);
  });

  return (
    <SuccessfulRegistration>
      <SuccessfulRegistrationText>{textKeys.text_successful}</SuccessfulRegistrationText>
    </SuccessfulRegistration>
  );
};
