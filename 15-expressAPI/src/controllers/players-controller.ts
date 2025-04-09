import { Request, Response } from "express";
import {
  createPlayerService,
  deletePlayerService,
  getPlayerByIdService,
  getPlayerService,
  updatePlayerService,
} from "../services/players-service";
import { bB, log } from "../utils/logs-chalks";
import { noContent } from "../utils/http-helper";
import { StatisticsModel } from "../models/statistics-model";

export const getPlayer = async (req: Request, res: Response) => {
  const httpResponse = await getPlayerService();
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPlayerById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const httpResponse = await getPlayerByIdService(id);
  res.status(httpResponse.statusCode).json(httpResponse.body);
  log(bB(`ID Requested: ${id}`));
};

export const postPlayer = async (req: Request, res: Response) => {
  const bodyValue = req.body;
  const httpResponse = await createPlayerService(bodyValue);
  if (httpResponse) {
    res.status(httpResponse.statusCode).json(httpResponse.body);
  } else {
    const response = await noContent();
    res.status(response.statusCode).json(response.body);
  }

  log(bodyValue);
};

export const deletePlayer = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const httpResponse = await deletePlayerService(id);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const updatePlayer = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const bodyValue: StatisticsModel = req.body;
  const httpResponse = await updatePlayerService(id, bodyValue);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};
