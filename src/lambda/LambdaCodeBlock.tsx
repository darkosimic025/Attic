import React from 'react';

/*EUI Components*/
import { EuiCodeBlock } from '@elastic/eui';

/*Types*/
import { LambdaCodeBlockProps } from './types';

/*Constants*/
import { textKeys } from 'utils/textKeys';

/*Enums*/
import { EUISizes } from 'theme/EuiEnums';

export const LambdaCodeBlock = ({ pythonScriptCode }: LambdaCodeBlockProps) => {
  return (
    <EuiCodeBlock
      language='json'
      isCopyable={false}
      fontSize={EUISizes.Medium}
      paddingSize={EUISizes.Medium}
      lineNumbers
      overflowHeight='400px'
    >
      {pythonScriptCode ? (pythonScriptCode as string) : textKeys.lambda_code_block_without_file}
    </EuiCodeBlock>
  );
};
