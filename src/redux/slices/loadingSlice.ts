import { LoadingState } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { HYDRATE } from "next-redux-wrapper";

const initialState: LoadingState = {
    loading: false,
};

export const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
    },
    // Special reducer for hydrating the state
    // extraReducers: {
    //     // HYDRATE trong next-redux-wrapper để đảm bảo rằng trạng thái ở phía máy chủ khớp với phía máy khách
    //     [HYDRATE]: (state, action) => {
    //         return {
    //             ...state,
    //             ...action.payload.loading,
    //         };
    //     },
    // },
});

export const {
    setLoading
} = loadingSlice.actions;

export const selectLoading = (state: any) => state.loading;

export default loadingSlice.reducer;
