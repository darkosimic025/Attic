export interface ButtonProps {
  children: string;
  size: string;
  color: string;
  onClick?: () => void;
  id: string;
}

export interface StyledButtonProps {
  size: string;
  color: string;
}

export type SizeProp = {
  height: string;
  width: string;
  margin: string;
};
