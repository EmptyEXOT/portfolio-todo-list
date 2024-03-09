import React, {FC, ReactNode} from 'react';
import {StateSchema} from "@/shared/store/types";
import {createReduxStore} from "@/shared/store/store";
import {Provider} from "react-redux";

interface StoreProviderProps {
    children?: ReactNode,
    initialState?: StateSchema,
}

export const StoreProvider: FC<StoreProviderProps> = ({children, initialState}) => {
    const store = createReduxStore(initialState as StateSchema)

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
