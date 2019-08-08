import { Request, Response } from "express";

export default class AuthController {

    public static login = async (req: Request, res: Response) => {
        console.log(res);
    }

    public static loginWithGoogle = async (req: Request, res: Response) => {
        console.log(res);
    }
}