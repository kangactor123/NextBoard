import { atom } from "recoil";

export const nowMovieTab = atom({
  key: "movieTab",
  default: "popular",
});

export const nowTvTab = atom({
  key: "tvTab",
  default: "popular",
});
