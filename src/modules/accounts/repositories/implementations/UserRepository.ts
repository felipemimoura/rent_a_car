import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { User } from "@modules/accounts/entities/User";
import { getRepository, Repository } from "typeorm";
import { IUsersRepository } from "../IUsersRepository";

class UserRepository implements IUsersRepository {
    private repository: Repository<User>
    constructor() {
        this.repository = getRepository(User)
    }

    async create({ email, driver_license, name, password, avatar, id }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            email,
            name,
            password,
            driver_license,
            id,
            avatar
        })

        await this.repository.save(user)
    }

    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOne({ email })

        return user
    }

    async findById(id: string): Promise<User> {
        const user = await this.repository.findOne(id)

        return user
    }
}

export { UserRepository }