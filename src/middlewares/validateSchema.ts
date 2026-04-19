import { Response, Request, NextFunction } from "express";
import { ZodType, ZodError } from "zod";

export const validateSchema = (schema: ZodType) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        await schema.parseAsync({
            body: req.body,
            query: req.query,
            params: req.params,
        })
        return next();
    } catch (error) {
        if(error instanceof ZodError) {
            return res.status(400).json ({
                error: "validation error",
                details: error.issues.map( issue => ({
                    mensagem: issue.message
                }))
            })
        }
        return res.status(500).json({
            error: "Internal server error"
        })
    }
}
