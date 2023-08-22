import { UserState } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: UserState = {
    userInfo: {}, // for user object
    userToken: '', // for storing the JWT
    success: false, // for monitoring the registration process.
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserInfo: (state, action: PayloadAction<any>) => {
            state.userInfo = action.payload;
        },
        setUserToken: (state, action: PayloadAction<string | null>) => {
            state.userToken = action.payload;
        },
        setSuccess: (state, action: PayloadAction<boolean>) => {
            state.success = action.payload;
        },
    },
    // Special reducer for hydrating the state
    // extraReducers: {
    //     // HYDRATE trong next-redux-wrapper để đảm bảo rằng trạng thái ở phía máy chủ khớp với phía máy khách
    //     [setUserInfo]: (state, action) => {
    //         return {
    //             ...state,
    //             ...action.payload.user,
    //         };
    //     },
    // },
});

export const {
    setUserInfo,
    setUserToken,
} = userSlice.actions;

export default userSlice.reducer;