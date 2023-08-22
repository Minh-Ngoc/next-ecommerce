import { ErrorState } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState: ErrorState = {
    err: false,
    message: ''
};

export const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        setErr: (state, action: PayloadAction<boolean>) => {
            state.err = action.payload;
        },
        setMessage: (state, action: PayloadAction<string | null>) => {
            state.message = action.payload;
        }
    },
    // Special reducer for hydrating the state
    // extraReducers: {
    //     // HYDRATE trong next-redux-wrapper để đảm bảo rằng trạng thái ở phía máy chủ khớp với phía máy khách
    //     [HYDRATE]: (state, action) => {
    //         return {
    //             ...state,
    //             ...action.payload.error,
    //         };
    //     },
    // },
});

export const {
    setErr,
    setMessage
} = errorSlice.actions;

export const selectError = (state: any) => state.error;

export default errorSlice.reducer;