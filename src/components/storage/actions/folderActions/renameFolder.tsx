import React, { useCallback } from 'react';

/*Libraries*/
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

/*Components*/
import { InputField } from 'components/UI/inputField/InputField';
import { ModalState } from 'components/UI/modal/ModalWithState';

/*Types*/
import { renameFolderModalProps, RenameProps } from './types';
import { Toast } from '@elastic/eui/src/components/toast/global_toast_list';

/*Services*/
import folderService from 'services/folderServices';

/*Enums*/
import { ModalColor, ModalSizes } from 'components/UI/modal/enums';

/*Helpers*/
import { checkErrorInputField } from 'utils/helpers';

/*Constants*/
import { textKeys } from 'utils/textKeys';
import { Toasts } from 'utils/toastsFileFolders';

/*Enums*/
import { InputFieldsName } from 'components/UI/inputField/enums';

export const RenameFolder = ({
  item,
  itemName,
  isShown,
  setIsShown,
  getItems,
  currentItem,
  setToasts,
  toasts,
}: renameFolderModalProps) => {
  const schema = yup.object({
    newName: yup.string().required(textKeys.rename_folder_required).trim(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<RenameProps>({
    resolver: yupResolver(schema),
    defaultValues: { newName: itemName },
  });

  const onSubmit: SubmitHandler<RenameProps> = useCallback(
    ({ newName }: Pick<RenameProps, 'newName'>) => {
      folderService
        .renameFolder({ id: item, newName: newName })
        .then(() => {
          getItems(currentItem);
          reset();
          setIsShown(false);
          setToasts(toasts.concat(Toasts.renameFolder.success as Toast));
        })
        .catch((error) => {
          setError(
            InputFieldsName.NewName,
            { type: textKeys.form_conflict_error, message: error.response.data.message },
            { shouldFocus: true }
          );
        });
    },
    []
  );

  const renameFolderModal = (
    <InputField
      {...register(InputFieldsName.NewName)}
      label={textKeys.rename_folder_input_label}
      name={InputFieldsName.NewName}
      seeIcon={false}
      type='text'
      validate={checkErrorInputField(errors, InputFieldsName.NewName)}
      error={errors[InputFieldsName.NewName]}
    />
  );

  return (
    <ModalState
      modalHeader={textKeys.rename_folder_header}
      color={ModalColor.Primary}
      size={ModalSizes.Medium}
      isShown={isShown}
      confirmName={textKeys.rename_folder_confirm_button}
      confirmFunction={handleSubmit(onSubmit)}
      hideModal={() => setIsShown(false)}
      modalContent={renameFolderModal}
    />
  );
};
