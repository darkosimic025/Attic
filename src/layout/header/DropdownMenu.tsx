import React, { useCallback } from 'react';

/*Components*/
import { Button } from 'components/UI/button/Button';

/*Hooks*/
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'store/store';
import { useSelector } from 'react-redux';

/*Types*/
import { RootState } from 'store/store';

/*Styled components*/
import {
  DropDownMenu,
  DropDownMenuItem,
  DropDownMenuItemIcon,
  DropDownMenuItemLabel,
  DropDownMenuName,
  DropDownMenuNameText,
  DropDownMenuSignOut,
} from './DropdownMenu.styled';

/*State management*/
import { signOut } from 'store/user.actions';

/*Constants*/
import { dropDownMenuItems } from './dropdownMenuItems';
import { paths } from 'paths/paths';

/*Utils*/
import { textKeys } from 'utils/textKeys';
import { IDsForTesting } from 'utils/idsForTesting';

export interface DropdownProps {
  closeDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DropdownMenu = React.forwardRef(({ closeDropdown }: DropdownProps, ref) => {
  const userFirstName = useSelector<RootState, string>((state) => state.user.firstName);
  const userLastName = useSelector<RootState, string>((state) => state.user.lastName);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const dropDownMenuItemsArray = dropDownMenuItems(navigate);

  const handleSignout = useCallback(() => {
    dispatch(signOut()).then(() => {
      navigate(paths.SIGNIN, { replace: true });
    });
  }, []);

  return (
    <DropDownMenu ref={ref as React.RefObject<HTMLDivElement>}>
      <DropDownMenuName>
        <DropDownMenuNameText
          id={IDsForTesting.header_dropdown_menu_name_of_user_id}
        >{`${userFirstName} ${userLastName}`}</DropDownMenuNameText>
      </DropDownMenuName>
      {dropDownMenuItemsArray.map(({ name, label, icon, navigateToPage, id }) => (
        <DropDownMenuItem
          id={id}
          key={name}
          onClick={() => {
            navigateToPage();
            closeDropdown(false);
          }}
        >
          <DropDownMenuItemIcon icon={icon} />
          <DropDownMenuItemLabel>{label}</DropDownMenuItemLabel>
        </DropDownMenuItem>
      ))}
      <DropDownMenuSignOut>
        <Button
          size='m'
          color='secondary'
          onClick={handleSignout}
          id={IDsForTesting.header_dropdown_menu_sign_out_button_id}
        >
          {textKeys.button_sign_out}
        </Button>
      </DropDownMenuSignOut>
    </DropDownMenu>
  );
});
DropdownMenu.displayName = 'DropdownMenu';
