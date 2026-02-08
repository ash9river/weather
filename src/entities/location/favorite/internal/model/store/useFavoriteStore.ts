import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Favorite } from "../types/favorite.types";
import type { District } from "@entities/location/district";

interface FavoriteState {
  favorites: Favorite[];
  toggleFavorite: (district: District) => void;
  updateName: (district: District, newName: Favorite["name"]) => void;
}
export const useFavoriteStore = create<FavoriteState>()(
  persist(
    (set, get) => ({
      favorites: [],

      toggleFavorite: (district) => {
        const { favorites } = get();
        const alreadyFavorite = favorites.some(
          (favorite) => favorite.district === district
        );

        if (alreadyFavorite) {
          // 이미 있다면 삭제
          set({
            favorites: favorites.filter(
              (favorite) => favorite.district !== district
            ),
          });
        } else {
          // 없다면 추가 (최대 6개 제한)
          if (favorites.length >= 6) {
            alert("즐겨찾기는 최대 6개까지만 등록 가능합니다.");
            return;
          }

          const newFavorite: Favorite = {
            district,
            name: null,
          };

          set({ favorites: [...favorites, newFavorite] });
        }
      },

      updateName: (district, newName) =>
        set((state) => ({
          favorites: state.favorites.map((f) =>
            f.district === district ? { ...f, name: newName } : f
          ),
        })),
    }),
    {
      name: "favorite-storage",
    }
  )
);
