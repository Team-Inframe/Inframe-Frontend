import { create } from "zustand";

export const useStickerStore = create((set) => ({
  stickers: [],
  addSticker: (
    sticker = {
      position: { x: 0, y: 0 },
      size: { width: 70, height: 70 },
    }
  ) => set((state) => ({ stickers: [...state.stickers, sticker] })),

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
