import { CategoriesRepositories } from "../repositories/CategoriesRepositories"

interface IRequest {
    name: string;
    description: string
}

class CreateCategoryServices {
    constructor(private categoriesRepository: CategoriesRepositories) { }
    execute({ name, description }: IRequest): void {
        const categoryAlreadyExist = this.categoriesRepository.findByName(name)

        if (categoryAlreadyExist) {
            throw new Error("Category already exist")
        }

        this.categoriesRepository.create({ name, description })
    }
}

export { CreateCategoryServices }