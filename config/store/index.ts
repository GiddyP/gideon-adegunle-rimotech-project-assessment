import { configureStore } from "@reduxjs/toolkit";
import isCenterPrompt from "@config/features/centerPrompt";
import formModal from "@config/features/formModal";

const rootReducer = {
    // Add your reducers here
    isCenterPrompt,
    formModal,
};

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;