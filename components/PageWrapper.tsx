"use client";

import { type ReactNode } from "react";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import { Provider } from "react-redux";
import store, { persistor } from "@/app/store";
import { ActiveIndexProvider } from "@/contexts/ActiveIndexContext";
import { PersistGate } from "redux-persist/integration/react";

export const AppWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ActiveIndexProvider>
            <Navbar />
            {children}
            <Footer />
          </ActiveIndexProvider>
        </PersistGate>
      </Provider>
    </div>
  );
};
