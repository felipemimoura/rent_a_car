import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { ICreateSpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}
@injectable()
class CreateSpecificationUseCase {
    constructor(
        @inject("SpecificationsRepository")
        private specificationsRepository: ICreateSpecificationsRepository) { }

    async execute({ name, description }: IRequest): Promise<void> {
        const specificationAlreadyExist = await this.specificationsRepository.findByName(name)

        if (specificationAlreadyExist) {
            throw new AppError("Specifications already exist")
        }

        await this.specificationsRepository.create({ name, description })
    }
}

export { CreateSpecificationUseCase }
