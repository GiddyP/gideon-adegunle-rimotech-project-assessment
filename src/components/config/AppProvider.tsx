import { Provider } from "react-redux";
import { ReactNode } from "react";
import { store } from "./store";

interface AppProviderProps {
    children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default AppProvider;