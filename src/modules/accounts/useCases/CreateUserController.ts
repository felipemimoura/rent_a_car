import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {

        const { driver_license, email, name, password, username } = request.body
        console.log('driver_license')

        const createUserUserCase = container.resolve(CreateUserUseCase)
        console.log(name)

        await createUserUserCase.execute({
            driver_license, email, name,
            password,
            username
        })

        return response.status(201).send()
    }
}

export { CreateUserController }