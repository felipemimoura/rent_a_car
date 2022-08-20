import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UserRepository implements IUsersRepository {
    private repository: Repository<User>
    constructor() {
        this.repository = getRepository(User)
    }

    async create({ email, driver_license, name, password, username }: ICreateUserDTO): Promise<void> {
        const user = await this.repository.create({
            email,
            name,
            password,
            username,
            driver_license
        })

        await this.repository.save(user)
    }
}

export { UserRepository }