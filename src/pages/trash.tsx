import React from 'react';
/* Components */
import { TrashTable } from 'components/storage/trashStorage/trashStorage';
import { TrashPage } from 'components/storage/trashStorage/trashStorage.styled';

export const Trash = () => (
  <TrashPage>
    <TrashTable />
  </TrashPage>
);
