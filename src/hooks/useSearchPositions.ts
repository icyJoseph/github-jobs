import create from "zustand";
import { jobs, Position, Params } from "~/utils/jobs";

export const useSearchPositions = create<{
  positions: Position[];
  loading: boolean;
  error: null | string;
  searchPositions: (params: Params) => Promise<void>;
}>((set) => ({
  positions: [],
  loading: false,
  error: null,
  searchPositions: async (params: Params) => {
    set({ loading: true });
    try {
      const { data } = await jobs("/positions.json", { params });
      set({ positions: data, loading: false });
    } catch (e) {
      set({ positions: [], loading: false, error: "Failed to fetch listings" });
    }
  }
}));
