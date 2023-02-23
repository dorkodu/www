import { ColorScheme } from "@mantine/core";
import create from "zustand";
import { immer } from "zustand/middleware/immer";
import { changeDateLanguage } from "../../../.old/src/lib/date";
import i18n from "../../../.old/src/lib/i18n";

interface State {
  loading: {
    locale: boolean;
  };
  colorScheme: ColorScheme;
}

interface Action {
  getLoading: () => boolean;
  setLocaleLoading: (loading: boolean) => void;
  changeLocale: (lang: string) => void;
  toggleColorScheme: (value: ColorScheme) => void;
}

const initialState: State = {
  loading: {
    locale: true,
  },
  colorScheme: "light",
};

export const useAppStore = create(
  immer<State & Action>((set, get) => ({
    ...initialState,

    toggleColorScheme(value) {
      set((state) => {
        state.colorScheme = value;
      });
    },

    getLoading: () => {
      return get().loading.locale;
    },

    setLocaleLoading: (loading) => {
      set((state) => {
        state.loading.locale = loading;
      });
    },

    changeLocale: async (lang) => {
      set((state) => {
        state.loading.locale = true;
      });

      await Promise.all([i18n.changeLanguage(lang), changeDateLanguage(lang)]);
      document.documentElement.lang = lang;

      set((state) => {
        state.loading.locale = false;
      });
    },
  }))
);
