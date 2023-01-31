import React from 'react';
/* Components */
import { StorageTable } from 'components/storage/personalStorage/PersonalStorage';
import { StoragePage } from 'components/storage/personalStorage/PersonalStorage.styled';

export const Storage = () => (
  <StoragePage>
    <StorageTable />
  </StoragePage>
);
