import React from 'react';

/*Components*/
import RegistrationForm from 'components/registration/RegistrationForm';

/*Styled components*/
import { RegistrationLayout } from 'components/registration/RegistrationForm.styled';

export const Registration = () => (
  <RegistrationLayout>
    <RegistrationForm />
  </RegistrationLayout>
);
