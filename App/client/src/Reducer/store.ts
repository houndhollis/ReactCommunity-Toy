import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

// store의 타입을 export 하는 방법이다.
export type RootState = ReturnType<typeof store.getState>;
