import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { ICategoriesRespository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string
}
@injectable()
class CreateCategoryUseCase {
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRespository) { }

    async execute({ name, description }: IRequest): Promise<void> {
        const categoryAlreadyExist = await this.categoriesRepository.findByName(name)
        console.log(name)

        if (categoryAlreadyExist) {
            throw new AppError("Category already exist")
        }

        await this.categoriesRepository.create({ name, description })
    }
}

export { CreateCategoryUseCase };
