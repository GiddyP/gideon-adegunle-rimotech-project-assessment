import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IsCenterPromptState {
  data: boolean;
}

const initialState: IsCenterPromptState = {
  data: true,
};

const isCenterPrompt = createSlice({
  name: 'isCenterPromptType',
  initialState,
  reducers: {
    setIsCenterPrompt: (state, action: PayloadAction<{ data: boolean }>) => {
      state.data = action.payload.data;
    },
  },
});

export const { setIsCenterPrompt } = isCenterPrompt.actions;

export default isCenterPrompt.reducer;