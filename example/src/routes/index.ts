import { Request, Response } from "express";
import { withApiTokenValidation } from "../lib/apiToken";

export const index = (req: Request, res: Response) => {
  res.send('index');
};