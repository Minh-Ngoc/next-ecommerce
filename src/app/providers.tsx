"use client";

import { store } from "@/redux/store";
import { Provider } from "react-redux";
import {NextUIProvider} from '@nextui-org/react';
import {ThemeProvider as NextThemesProvider} from "next-themes";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          {children}
        </NextThemesProvider>
      </NextUIProvider>
    </Provider>
  );
}
