import create from "zustand";
import { jobs, Position } from "~/utils/jobs";

export const useSinglePosting = create<{
  position: null | Position;
  fetchPosition: (id: string) => Promise<void>;
}>((set) => ({
  position: null,
  fetchPosition: async (id: string) => {
    const { data } = await jobs.get(`/${id}.json`);
    set({ position: data });
  }
}));
