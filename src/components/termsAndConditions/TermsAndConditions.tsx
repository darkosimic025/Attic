import React from 'react';
/*Hooks*/
import { useToggle } from 'hooks/useToggle';

/*Components*/
import { ClickableText } from 'components/UI/clickableText/ClickableText';
import { ModalState } from 'components/UI/modal/ModalWithState';
import { textKeys } from 'utils/textKeys';

/*Styled components*/
import { TermsAndConditionsText } from './TermsAndConditionsText';
import { ModalColor, ModalSizes } from 'components/UI/modal/enums';

export const TermsAndConditions = ({ id }: { id: string }) => {
  const [isShown, toggleTermsAndConditions] = useToggle();
  const content = <>{TermsAndConditionsText}</>;

  return (
    <>
      <ClickableText id={id} handleClick={toggleTermsAndConditions}>
        {textKeys.terms_and_conditions_name}
      </ClickableText>
      <ModalState
        confirmFunction={() => true}
        modalHeader={textKeys.terms_and_conditions_name}
        color={ModalColor.Primary}
        size={ModalSizes.Large}
        isShown={isShown}
        hideModal={toggleTermsAndConditions}
        modalContent={content}
      />
    </>
  );
};
