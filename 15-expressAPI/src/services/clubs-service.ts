import { findAllClubs } from "../repositories/clubs-repository";
import { OK } from "../utils/http-helper";

export const getClubService = async () => {
  const data = await findAllClubs();
  const response = OK(data);
  return response;
};
