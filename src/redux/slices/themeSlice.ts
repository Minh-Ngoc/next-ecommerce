import { ThemeState } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MoonFilledIcon, SunFilledIcon } from "@/components/Icons";

const initialState: ThemeState = {
    status: 'dark',
    icon: MoonFilledIcon,
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        themeLight: (state, action: PayloadAction<any>) => {
            state.status = 'light';
            state.icon = MoonFilledIcon;
        },
        themeDark: (state, action: PayloadAction<any>) => {
            state.status = 'dark';
            state.icon = SunFilledIcon;
        },
    },
});

export const {
    themeLight
} = themeSlice.actions;

export const selectLoading = (state: any) => state.loading;

export default themeSlice.reducer;
