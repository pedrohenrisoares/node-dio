import { ClubModel } from "../models/club-model";
import fs from "fs/promises";
import path from "path";

export const findAllClubs = async (): Promise<ClubModel[]> => {
  const data = await fs.readFile(
    path.resolve(__dirname, "..", "data", "clubs.json"),
    "utf-8"
  );
  const clubs: ClubModel[] = JSON.parse(data);
  return clubs;
};
