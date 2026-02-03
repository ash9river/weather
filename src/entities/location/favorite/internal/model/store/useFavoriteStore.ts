// entities/location/favorite/model/favoriteStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Favorite } from "../types/favorite.types";
import type { District } from "@entities/location/district";

interface FavoriteState {
  favorites: Favorite[];
  toggleFavorite: (district: District) => void;
  updateName: (district: District, newName: string) => void;
  isFavorite: (district: District) => boolean;
}
export const useFavoriteStore = create<FavoriteState>()(
  persist(
    (set, get) => ({
      favorites: [],

      // 1. 즐겨찾기 여부 확인
      isFavorite: (district) =>
        get().favorites.some((favorite) => favorite.district === district),

      // 2. 토글 로직 (추가/삭제 통합)
      toggleFavorite: (district) => {
        const { favorites, isFavorite } = get();
        const alreadyFavorite = isFavorite(district);

        if (alreadyFavorite) {
          // 이미 있다면 삭제
          set({
            favorites: favorites.filter(
              (favorite) => favorite.district == district
            ),
          });
        } else {
          // 없다면 추가 (최대 6개 제한 체크)
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

      // 3. 별칭 수정
      updateName: (district, newName) =>
        set((state) => ({
          favorites: state.favorites.map((f) =>
            f.district === district ? { ...f, name: newName } : f
          ),
        })),
    }),
    {
      name: "favorite-storage", // 로컬스토리지에 저장될 키
    }
  )
);
