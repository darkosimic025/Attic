import styled from 'styled-components';

export const DeleteFileModal = styled.div`
  width: 100%;
  height: 100%;
  font-size: ${({ theme }) => theme.fontSize.normal};
  word-break: break-word;
`;

export const BoldDeleteFile = styled.span`
  font-weight: bold;
  word-break: break-all;
`;
