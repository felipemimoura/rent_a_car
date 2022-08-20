import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IUsersRepository } from "../repositories/IUsersRepository";
@injectable()
class CreateUserUseCase {

    constructor(
        @inject("UserRepository")
        private usersRepository: IUsersRepository) { }

    async execute({ driver_license, email, name, password, username }: ICreateUserDTO): Promise<void> {
        await this.usersRepository.create({
            name, email, driver_license, password, username
        })
    }
}


export { CreateUserUseCase }