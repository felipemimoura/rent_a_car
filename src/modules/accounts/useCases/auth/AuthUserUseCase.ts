import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    email: string,
    password: string
}

interface IResponse {
    user: {
        name: string,
        email: string
    },
    token: string
}

@injectable()
class AuthUserUseCase {
    constructor(
        @inject('UserRepository')
        private userRepository: IUsersRepository
    ) { }

    async execute({ email, password }: IRequest): Promise<IResponse> {
        // Verificar se usuário existe
        const user = await this.userRepository.findByEmail(email)

        if (!user) {
            throw new AppError("Email or password are incorrecty")
        }

        // Verificar se a senha bate

        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch) {
            throw new AppError("Email or password are incorrecty")
        }

        // Gerar token

        const token = sign({}, 'fd0eed8ba5c0d6fd8a8a327cd195f3f7', { expiresIn: '1d', subject: user.id })


        return {
            user: {
                name: user.name,
                email: user.email
            },
            token
        }

    }

}


export { AuthUserUseCase }