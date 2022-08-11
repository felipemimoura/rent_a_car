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

    execute({ name, description }: IRequest): void {
        const specificationAlreadyExist = this.specificationsRepository.findByName(name)

        if (specificationAlreadyExist) {
            throw new Error("Specifications already exist")
        }

        this.specificationsRepository.create({ name, description })
    }
}

export { CreateSpecificationUseCase }
