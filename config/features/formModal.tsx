import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormModalState } from '@typings';


const initialState: FormModalState = {
  isOpen: false,
  isAliasOpen: false,
};

export const formModalSlice = createSlice({
  name: 'formModal',
  initialState,
  reducers: {
    toggleFormModal: (state, action: PayloadAction<{ isOpen: boolean }>) => {
      state.isOpen = !state.isOpen;
    },
    toggleAliasModal: (state, action: PayloadAction<{ isAliasOpen: boolean }>) => {
      state.isAliasOpen = !state.isAliasOpen;
    },
  },
});

export const { toggleFormModal, toggleAliasModal } = formModalSlice.actions;

export default formModalSlice.reducer;