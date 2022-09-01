import { AppError } from "@errors/AppError";
import { UserRepository } from "@modules/accounts/repositories/implementations/UserRepository";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string
}
export async function ensureAuthenticate(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization

    if (!authHeader) {
        throw new AppError('Token missing', 401)
    }



    const [, token] = authHeader.split(' ')

    try {
        const { sub: user_id } = verify(token, 'fd0eed8ba5c0d6fd8a8a327cd195f3f7') as IPayload

        const userRepository = new UserRepository()
        const user = await userRepository.findById(user_id)


        if (!user) {
            throw new AppError("User does not Exist", 401)
        }

        request.user = {
            id: user_id
        }
        next()
    } catch {
        throw new AppError("Invalid token", 401)
    }

}