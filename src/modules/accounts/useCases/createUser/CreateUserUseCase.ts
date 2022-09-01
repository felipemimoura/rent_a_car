import { inject, injectable } from "tsyringe";
import { hash } from 'bcryptjs'
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { AppError } from "@errors/AppError";
@injectable()
class CreateUserUseCase {

    constructor(
        @inject("UserRepository")
        private usersRepository: IUsersRepository) { }

    async execute({ driver_license, email, name, password }: ICreateUserDTO): Promise<void> {


        const userAlreadyExist = await this.usersRepository.findByEmail(email)

        if (userAlreadyExist) {
            throw new AppError('User already exist')
        }

        const passwordHash = await hash(password, 8)

        await this.usersRepository.create({
            name, email, driver_license, password: passwordHash
        })
    }
}


export { CreateUserUseCase }