import { ICreateSpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    constructor(private specificationsRepository: ICreateSpecificationsRepository) { }
    execute({ name, description }: IRequest): void {
        const specificationAlreadyExist = this.specificationsRepository.findByName(name)

        if (specificationAlreadyExist) {
            throw new Error("Specifications already exist")
        }

        this.specificationsRepository.create({ name, description })
    }
}

export { CreateSpecificationUseCase }
