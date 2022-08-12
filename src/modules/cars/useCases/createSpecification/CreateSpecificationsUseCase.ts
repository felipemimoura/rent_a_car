import { inject, injectable } from "tsyringe";
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
            throw new Error("Specifications already exist")
        }

        await this.specificationsRepository.create({ name, description })
    }
}

export { CreateSpecificationUseCase }
