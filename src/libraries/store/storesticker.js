import { create } from "zustand";

export const useStickerStore = create((set) => ({
  stickers: [],
  addSticker: (sticker) =>
    set((state) => ({ stickers: [...state.stickers, sticker] })),

  updateSticker: (index, newProps) =>
    set((state) => ({
      stickers: state.stickers.map((sticker, i) =>
        i === index ? { ...sticker, ...newProps } : sticker
      ),
    })),

  removeSticker: (index) =>
    set((state) => ({
      stickers: state.stickers.filter((_, i) => i !== index),
    })),

  clearStickers: () => set(() => ({ stickers: [] })),
}));
