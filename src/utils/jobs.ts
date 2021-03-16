import axios from "axios";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Params =
  | {
      search?: string;
      full_time?: boolean;
      location?: string;
    }
  | {
      search?: string;
      full_time?: boolean;
      lat: number;
      long: number;
    };

export type Position = {
  id: string;
  type: "Full Time" | "Contract";
  url: string;
  company: string;
  company_url: string;
  location: string;
  title: string;
  description: string;
  how_to_apply: string;
  company_logo: string | null;
  created_at: string;
};

export const jobs = axios.create({ baseURL: "https://jobs.github.com/" });
