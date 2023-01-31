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
import { RenameProps } from '../folderActions/types';
import { RenameFileProps } from './types';
import { Toast } from '@elastic/eui/src/components/toast/global_toast_list';

/*Services*/
import fileService from 'services/fileServices';

/*Enums*/
import { ModalColor, ModalSizes } from 'components/UI/modal/enums';

/*Helpers*/
import { checkErrorInputField } from 'utils/helpers';

/*Constants*/
import { textKeys } from 'utils/textKeys';
import { Toasts } from 'utils/toastsFileFolders';

/*Enums*/
import { InputFieldsName } from 'components/UI/inputField/enums';

export const RenameFile = ({
  item,
  itemName,
  isShown,
  setIsShown,
  getItems,
  currentItem,
  toasts,
  setToasts,
}: RenameFileProps) => {
  const schema = yup.object({
    newName: yup.string().required(textKeys.rename_file_required).trim(),
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
      fileService
        .renameFile({ item, newName })
        .then(() => {
          getItems(currentItem);
          reset();
          setToasts(toasts.concat(Toasts.renameFile.success as Toast));
          setIsShown(false);
        })
        .catch((error) => {
          reset();
          setError(
            InputFieldsName.NewName,
            { type: textKeys.form_conflict_error, message: error.response.data.message },
            { shouldFocus: true }
          );
        });
    },
    []
  );

  const renameFileModal = (
    <InputField
      {...register(InputFieldsName.NewName)}
      label={textKeys.rename_file_input_label}
      name={InputFieldsName.NewName}
      seeIcon={false}
      type='text'
      validate={checkErrorInputField(errors, InputFieldsName.NewName)}
      error={errors[InputFieldsName.NewName]}
    />
  );

  return (
    <ModalState
      modalHeader={textKeys.rename_file_header}
      color={ModalColor.Primary}
      size={ModalSizes.Medium}
      isShown={isShown}
      confirmName={textKeys.rename_file_confirm_button}
      confirmFunction={handleSubmit(onSubmit)}
      hideModal={() => setIsShown(false)}
      modalContent={renameFileModal}
    />
  );
};
