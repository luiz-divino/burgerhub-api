import { Request, Response } from "express";
import { CreateUserService } from "@src/services/user/createUserService";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const createUserService = new CreateUserService();
    const user = await createUserService.execute();
  }
}
export { CreateUserController };
