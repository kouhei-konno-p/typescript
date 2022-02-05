import { Request, Response } from "express";
import { getUserData } from "../services/user"
import { userModel } from "../model/user";

export const index = (req: Request, res: Response) => {
  const data = getUserData(userModel, '1');
  res.send(data);
};