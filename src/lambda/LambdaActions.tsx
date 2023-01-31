import React from 'react';

/*EUI Components*/
import { EuiFlexItem, EuiFormRow, EuiSuperSelect, EuiText } from '@elastic/eui';

/*Types*/
import { LambdaActionsProps } from './types';

/*Constants*/
import { textKeys } from 'utils/textKeys';

/*Enums*/
import { Actions } from './enums';
import { EUIColors, EUISizes } from 'theme/EuiEnums';

export const LambdaActions = ({ setSelectedValue }: LambdaActionsProps) => {
  const options = [
    {
      value: Actions.UploadFile,
      inputDisplay: <strong>{textKeys.lambda_action_upload_file_header}</strong>,
      dropdownDisplay: (
        <>
          <strong>{textKeys.lambda_action_upload_file_header}</strong>
          <EuiText size={EUISizes.Small} color={EUIColors.Subdued}>
            <p>{textKeys.lambda_action_upload_file_description}</p>
          </EuiText>
        </>
      ),
    },
  ];

  return (
    <EuiFlexItem>
      <EuiFormRow label={textKeys.lambda_action} fullWidth={true}>
        <EuiSuperSelect
          fullWidth={true}
          options={options}
          onChange={(value) => setSelectedValue(value)}
          valueOfSelected={options[0].value}
          hasDividers
        />
      </EuiFormRow>
    </EuiFlexItem>
  );
};
