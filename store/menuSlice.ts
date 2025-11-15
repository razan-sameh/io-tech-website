import { createSlice } from "@reduxjs/toolkit";

interface MenuState {
  mobileMenuOpen: boolean;
  serviceMenuOpen: boolean;
}

const initialState: MenuState = {
  mobileMenuOpen: false,
  serviceMenuOpen: false,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    toggleServiceMenu: (state) => {
      state.serviceMenuOpen = !state.serviceMenuOpen;
    },
    closeMenus: (state) => {
      state.mobileMenuOpen = false;
      state.serviceMenuOpen = false;
    },
    setMobileMenu: (state, action: { payload: boolean }) => {
      state.mobileMenuOpen = action.payload;
    },
    setServiceMenu: (state, action: { payload: boolean }) => {
      state.serviceMenuOpen = action.payload;
    },
  },
});

export const {
  toggleMobileMenu,
  toggleServiceMenu,
  closeMenus,
  setMobileMenu,
  setServiceMenu,
} = menuSlice.actions;

export default menuSlice.reducer;
