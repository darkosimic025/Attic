/*Libraries*/
import { createSlice } from '@reduxjs/toolkit';

export interface TableInitialStateProps {
  currentItem: null | string;
  isLoading: boolean;
  cuttedItem: null | string;
}

const initialState: TableInitialStateProps = {
  currentItem: null,
  isLoading: false,
  cuttedItem: null,
};

const tableSlice = createSlice({
  name: 'Table',
  initialState,
  reducers: {
    setCurrentItem: (state, action) => {
      state.currentItem = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setCuttedItem: (state, action) => {
      state.cuttedItem = action.payload;
    },
  },
});

export const { setCurrentItem, setIsLoading, setCuttedItem } = tableSlice.actions;

export default tableSlice.reducer;
