import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { hash } from 'bcryptjs'
@injectable()
class CreateUserUseCase {

    constructor(
        @inject("UserRepository")
        private usersRepository: IUsersRepository) { }

    async execute({ driver_license, email, name, password }: ICreateUserDTO): Promise<void> {


        const userAlreadyExist = await this.usersRepository.findByEmail(email)

        if (userAlreadyExist) {
            throw new Error('User already exist')
        }

        const passwordHash = await hash(password, 8)

        await this.usersRepository.create({
            name, email, driver_license, password: passwordHash
        })
    }
}


export { CreateUserUseCase }