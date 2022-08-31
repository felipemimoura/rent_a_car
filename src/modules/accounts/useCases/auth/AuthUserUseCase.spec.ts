import { AppError } from "../../../../errors/AppError"
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO"
import { UserRepositoryInMemory } from "../../repositories/in-memory/UserRepositoryInMemory"
import { CreateUserUseCase } from "../createUser/CreateUserUseCase"
import { AuthUserUseCase } from "./AuthUserUseCase"

let userRepositoryInMemory: UserRepositoryInMemory
let authUserUseCase: AuthUserUseCase
let createUserUseCase: CreateUserUseCase


describe("Authenticate user", () => {
    beforeEach(() => {
        userRepositoryInMemory = new UserRepositoryInMemory();
        authUserUseCase = new AuthUserUseCase(userRepositoryInMemory);
        createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
    })

    it("should be able to authentica an user", async () => {
        const user: ICreateUserDTO = {
            driver_license: '000123',
            email: 'teste@teste.com.br',
            password: '1234',
            name: 'User test'
        }

        await createUserUseCase.execute(user)

        const result = await authUserUseCase.execute({
            email: user.email,
            password: user.password
        })

        expect(result).toHaveProperty('token')
    })

    it("should not be able to authenticante a non existent user", async () => {
        expect(async () => {
            await authUserUseCase.execute({
                email: 'teste@teste',
                password: '1234'
            })
        }).rejects.toBeInstanceOf(AppError)
    })

    it('should not be able to authentica a user when passwor not match', async () => {
        expect(async () => {
            const user: ICreateUserDTO = {
                driver_license: '000123',
                email: 'teste@teste.com.br',
                password: '1234',
                name: 'User test'
            }

            await createUserUseCase.execute(user)

            await authUserUseCase.execute({
                email: user.email,
                password: 'anotherPassword'
            })
        }).rejects.toBeInstanceOf(AppError)
    })
}) 