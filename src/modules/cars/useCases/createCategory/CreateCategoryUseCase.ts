import { ICategoriesRespository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string
}

class CreateCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRespository) { }
    async execute({ name, description }: IRequest): Promise<void> {
        const categoryAlreadyExist = await this.categoriesRepository.findByName(name)

        if (categoryAlreadyExist) {
            throw new Error("Category already exist")
        }

        await this.categoriesRepository.create({ name, description })
    }
}

export { CreateCategoryUseCase };
