import { create } from "zustand";

export const useErrorStore = create((set) => ({
    errorMessage: "",
    showErrorPopup: false,
    triggerError: (message) => set({ errorMessage: message, showErrorPopup: true }),
    clearError: () => set({ showErrorPopup: false }),
}));