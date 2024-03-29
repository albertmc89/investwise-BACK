import { type Request } from "express";
import { type ReceivedProperty } from "../types";

export interface AuthRequest extends Request {
  userId?: string;
}

export interface RequestWithBody
  extends Request<
    Record<string, unknown>,
    Record<string, unknown>,
    ReceivedProperty
  > {
  userId?: string;
}

export interface AuthRequestWithBooleanBody
  extends Request<
    Record<string, unknown>,
    Record<string, unknown>,
    { isRented: boolean }
  > {
  userId?: string;
}
