import { Response, Request } from "express";
import { container } from "tsyringe";
import { UpdateUserAvatarUseCase } from "./UpadateUserAvatarUseCase";

class UpdateUserAvatarController {
    async handle(request: Request, response: Response) {

        const { id } = request.user

        const updateUserAvatarUseCase = container.resolve(UpdateUserAvatarUseCase)

        await updateUserAvatarUseCase.execute({ user_id: id, avatar_file: null })


        return response.status(204).send()

    }
}

export { UpdateUserAvatarController }