import { Response, Request, NextFunction } from "express";
import { ZodType } from "zod";

export const validateSchema = (schema: ZodType) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        await schema.parseAsync({

        })
        next();
    } catch (error) {
        
    }
}
