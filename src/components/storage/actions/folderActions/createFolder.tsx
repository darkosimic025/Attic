import React, { useCallback, useRef } from 'react';

/*Libraries*/
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

/*Components*/
import { InputField } from 'components/UI/inputField/InputField';
import { ModalRef } from 'components/UI/modal/ModalWithRef';

/*EUI Components*/
import { EuiButton, EuiFlexItem } from '@elastic/eui';

/*Types*/
import { CreateFolderFormProps, CreateFolderProps } from './types';
import { RefObject } from 'components/UI/modal/types';
import { Toast } from '@elastic/eui/src/components/toast/global_toast_list';

/*Services*/
import folderService from 'services/folderServices';

/*Enums*/
import { ModalColor, ModalSizes } from 'components/UI/modal/enums';

/*Helpers*/
import { checkErrorInputField } from 'utils/helpers';

/*Hooks*/
import { useSelector } from 'react-redux';

/*State management*/
import { RootState } from 'store/store';

/*Constants*/
import { textKeys } from 'utils/textKeys';
import { Toasts } from 'utils/toastsFileFolders';

/*Enums*/
import { InputFieldsName } from 'components/UI/inputField/enums';

export const CreateFolder = ({ getItems, toasts, setToasts }: CreateFolderProps) => {
  const parentId = useSelector<RootState, string | null>((state) => state.table.currentItem);
  const schema = yup.object({
    name: yup.string().required(textKeys.create_folder_required).trim(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<CreateFolderFormProps>({
    resolver: yupResolver(schema),
    defaultValues: { name: '' },
  });
  const modalRef = useRef<RefObject>(null);
  const closeModal = useCallback(() => {
    if (modalRef.current) modalRef.current.closeModal();
    reset();
  }, []);

  const openModal = useCallback(() => {
    if (modalRef.current) modalRef.current.openModal();
  }, []);

  const onSubmit: SubmitHandler<CreateFolderFormProps> = useCallback(
    ({ name }: CreateFolderFormProps) => {
      folderService
        .postFolder({ name, parentId: parentId })
        .then(() => {
          closeModal();
          getItems(parentId);
          reset();
          setToasts(toasts.concat(Toasts.createFolder.success as Toast));
        })
        .catch((error) => {
          setError(
            InputFieldsName.Name,
            { type: textKeys.form_conflict_error, message: error.response.data.message },
            { shouldFocus: true }
          );
        });
    },
    [parentId]
  );

  const createFolderModal = (
    <InputField
      {...register(InputFieldsName.Name)}
      label={textKeys.create_folder_input_label}
      name={InputFieldsName.Name}
      seeIcon={false}
      type='text'
      validate={checkErrorInputField(errors, InputFieldsName.Name)}
      error={errors[InputFieldsName.Name]}
    />
  );

  return (
    <>
      <EuiFlexItem>
        <EuiButton size='s' fill color='primary' iconType='plusInCircle' onClick={openModal}>
          {textKeys.create_folder_button}
        </EuiButton>
      </EuiFlexItem>
      <ModalRef
        onClose={reset}
        ref={modalRef}
        modalHeader={textKeys.create_folder_header}
        color={ModalColor.Primary}
        size={ModalSizes.Medium}
        modalContent={createFolderModal}
        confirmFunction={handleSubmit(onSubmit)}
        confirmName={textKeys.create_folder_confirm_button}
      />
    </>
  );
};
