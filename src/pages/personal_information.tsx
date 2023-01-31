import React from 'react';

/*Components*/
import { PersonalInformationPage } from 'components/personalInformation/PersonalInformation.styled';
import { PersonalInformationSection } from 'components/personalInformation/Personalnformation';
import { UploadProfilePicutreSection } from 'components/personalInformation/profilePicture/UploadProfilePicutre';

export const PersonalInformation = () => (
  <PersonalInformationPage>
    <PersonalInformationSection />
    <UploadProfilePicutreSection />
  </PersonalInformationPage>
);
