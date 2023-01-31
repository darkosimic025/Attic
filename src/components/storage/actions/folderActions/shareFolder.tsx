import React from 'react';

/*Libraries*/
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

/*Components*/
import { InputField } from 'components/UI/inputField/InputField';
import { ModalState } from 'components/UI/modal/ModalWithState';

/*Types*/
import { ShareInviteFolderModalProps, ShareInviteProps } from './types';
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

export const ShareFolder = ({
  item,
  isShown,
  setIsShown,
  toasts,
  setToasts,
}: ShareInviteFolderModalProps) => {
  const schema = yup.object({
    invitedUserEmail: yup
      .string()
      .email(textKeys.share_folder_email_invalid)
      .required(textKeys.share_folder_required)
      .trim(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<ShareInviteProps>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<ShareInviteProps> = ({
    invitedUserEmail,
  }: Pick<ShareInviteProps, InputFieldsName.InvitedUserEmail>) => {
    folderService
      .shareFolder({ folderId: item, invitedUserEmail })
      .then(() => {
        reset();
        setIsShown(false);
        setToasts(toasts.concat(Toasts.shareFolder.success as Toast));
      })
      .catch((error) => {
        setError(
          InputFieldsName.InvitedUserEmail,
          { type: textKeys.form_conflict_error, message: error.response.data.message },
          { shouldFocus: true }
        );
      });
  };

  const shareFolderModal = (
    <InputField
      {...register(InputFieldsName.InvitedUserEmail)}
      label={textKeys.share_folder_input_label}
      name={InputFieldsName.InvitedUserEmail}
      seeIcon={false}
      type='text'
      validate={checkErrorInputField(errors, InputFieldsName.InvitedUserEmail)}
      error={errors[InputFieldsName.InvitedUserEmail]}
    />
  );

  return (
    <ModalState
      modalHeader={textKeys.share_folder_header}
      color={ModalColor.Primary}
      size={ModalSizes.Medium}
      isShown={isShown}
      confirmName={textKeys.share_folder_confirm_button}
      confirmFunction={handleSubmit(onSubmit)}
      hideModal={() => setIsShown(false)}
      modalContent={shareFolderModal}
    />
  );
};
