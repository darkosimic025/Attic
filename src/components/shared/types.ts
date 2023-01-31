import React, { Dispatch, SetStateAction } from 'react';
import { Toast as ToastType } from  '@elastic/eui/src/components/toast/global_toast_list';

export interface SharedItem {
    itemId: string | null;
    itemType: number;
    dateCreated: string;
    dateModified: string;
    name: string;
    size: number | null;
    extension: string | null;
    shareType: number;
    permission: number;
  }

export interface SharedActionTabGeneratorProps {
    label: string;
    icon: JSX.Element;
    handleClick: ({itemId,name, extension}: SharedItem) => void;
    item: number;
}

export interface SharedGenerateActionProps {
    setIsShown: Dispatch<SetStateAction<boolean>>;
    setItem: Dispatch<SetStateAction<SharedItem['itemId']>>;
    setModal: Dispatch<SetStateAction<string | undefined>>;
    setItemName: Dispatch<SetStateAction<SharedItem['name']>>
    cuttedItem: string | null;
    getItems: (id: string | null) => Promise <void | { payload: SharedItem[]; type:string}>;
    currentItem: SharedItem ['itemId'];
    toasts: ToastType[];
    setToasts: React.Dispatch<React.SetStateAction<ToastType[]>>;
}