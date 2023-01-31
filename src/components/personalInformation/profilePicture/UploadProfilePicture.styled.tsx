/*Libraries*/
import styled from 'styled-components';

/*Icons*/
import { ArrowUpload } from '@styled-icons/fluentui-system-regular';

export const UploadProfilePictureInputFile = styled.input`
  display: none;
`;

export const UploadProfilePictureWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  margin-bottom: 15px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.shadowDark};
`;

export const UploadProfilePictureInputImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  cursor: pointer;
`;

export const UploadProfilePictureWithButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  height: 100%;
`;
export const ProfilePictureHeader = styled.span`
  display: inline-block;
  margin-bottom: 8px;
  font-weight: bold;
`;

export const UploadProfilePictureIcon = styled(ArrowUpload)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  width: 100px;
  color: ${({ theme }) => theme.colors.shadowDark};
  cursor: pointer;
  &:hover {
    transition: 0.2s;
    color: ${({ theme }) => theme.colors.dark};
  }
`;

export const UploadProfilePictureIconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  background-color: rgba(178, 178, 178, 0.7);
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: 0.3s ease;

  ${UploadProfilePictureWrapper}:hover & {
    opacity: 1;
  }
`;
